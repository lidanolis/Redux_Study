import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxComponent/store";

import { useState } from "react";

//actions
import { DELETE_FRUIT, fruitProp } from "../reduxComponent/slice";
import React from "react";
import FruitModal from "../modals/fruitModals";

export const MainPage: React.FC = () => {
  const dipatch = useDispatch();
  const fruits = useSelector((state: RootState) => state.fruit);

  const [fruitInfo, setFruitInfo] = useState<fruitProp>({
    id: "",
    name: "",
    brand: "",
    price: 0,
    numberAvailable: 0,
    numberSold: 0,
  });

  const [dialogStatus, setDialogStatus] = useState("Add");
  const [showModal, setShowModal] = useState(false);

  function onInfoChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFruitInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      {fruits.map((perFruit) => (
        <React.Fragment key={perFruit.id}>
          <div>
            <div>fruit name: {perFruit.name}</div>
            <div>fruit brand: {perFruit.brand}</div>
            <div>fruit price: {perFruit.price}</div>
            <div>number of fruit available: {perFruit.numberAvailable}</div>
            <button
              onClick={() => {
                dipatch(DELETE_FRUIT({ id: perFruit.id }));
              }}
            >
              Delete Fruit
            </button>
            <button
              onClick={() => {
                setFruitInfo({
                  id: perFruit.id,
                  name: perFruit.name,
                  brand: perFruit.brand,
                  price: Number(perFruit.price),
                  numberAvailable: Number(perFruit.numberAvailable),
                  numberSold: Number(perFruit.numberSold),
                });
                setDialogStatus("Modify");
                setShowModal(true);
              }}
            >
              Modify Fruit
            </button>
          </div>
          <br />
        </React.Fragment>
      ))}

      <button onClick={() => setShowModal(true)}>Add Fruit</button>
      {showModal && (
        <FruitModal
          status={dialogStatus}
          setStatus={setDialogStatus}
          showModal={showModal}
          setShowModal={setShowModal}
          fruitInfo={fruitInfo}
          setFruitInfo={setFruitInfo}
          onInfoChange={onInfoChange}
        />
      )}
    </>
  );
};
