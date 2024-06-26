import { useSelector } from "react-redux";
import { RootState } from "../reduxComponent/store";

import { useState } from "react";

//actions
import { fruitProp } from "../reduxComponent/slice";
import React from "react";
import FruitModal from "../modals/fruitModals";
import ItemComponent from "../components/ItemComponent";
import styled from "styled-components";

export const MainPage: React.FC = () => {
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
      <ItemListSection>
        <ItemListWarp>
          {fruits.map((perFruit) => (
            <ItemWarp key={perFruit.id}>
              <ItemComponent
                fruitInfo={perFruit}
                setDialogStatus={setDialogStatus}
                setShowModal={setShowModal}
                setFruitInfo={setFruitInfo}
              ></ItemComponent>
            </ItemWarp>
          ))}
        </ItemListWarp>
      </ItemListSection>

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

const ItemListSection = styled.div`
  width: 100%;
  height: auto;
  background-color: lightgreen;
`;
const ItemListWarp = styled.div`
  width: 1500px;
  margin: auto;
  height: auto;
  padding: 16px 24px;
  box-sizing: border-box;
  gap: 10px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ItemWarp = styled.div`
  min-width: 400px;
  min-height: 450px;
  max-width: 400px;
  max-height: 450px;
`;
