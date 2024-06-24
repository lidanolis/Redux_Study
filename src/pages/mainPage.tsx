import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxComponent/store";

import { useState } from "react";

//actions
import {
  ADD_NEW_FRUIT,
  DELETE_FRUIT,
  MODIFY_FRUIT,
} from "../reduxComponent/slice";
import React from "react";

export const MainPage: React.FC = () => {
  const dipatch = useDispatch();
  const fruits = useSelector((state: RootState) => state.fruit);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [numberAvailable, setNumberAvailable] = useState(0);
  const [dialogStatus, setDialogStatus] = useState("Add");

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
                setId(perFruit.id);
                setName(perFruit.name);
                setBrand(perFruit.brand);
                setPrice(Number(perFruit.price));
                setNumberAvailable(Number(perFruit.numberAvailable));
                setDialogStatus("Modify");
              }}
            >
              Modify Fruit
            </button>
          </div>
          <br />
        </React.Fragment>
      ))}
      <br />
      <br />
      <label>name of Item:</label>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>name of Brand:</label>
      <input
        type="text"
        placeholder="brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <label>price of Item:</label>
      <input
        type="text"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value) || 0)}
      />
      <label>number of Item:</label>
      <input
        type="text"
        placeholder="number available"
        value={numberAvailable}
        onChange={(e) => setNumberAvailable(Number(e.target.value) || 0)}
      />
      <button
        onClick={() => {
          dialogStatus === "Add"
            ? dipatch(
                ADD_NEW_FRUIT({
                  name: name,
                  brand: brand,
                  price: price,
                  numberSold: 0,
                  numberAvailable: numberAvailable,
                })
              )
            : dipatch(
                MODIFY_FRUIT({
                  id: id,
                  name: name,
                  brand: brand,
                  price: price,
                  numberAvailable: numberAvailable,
                })
              );
          setDialogStatus("Add");
          setName("");
          setBrand("");
          setNumberAvailable(0);
          setPrice(0);
        }}
      >
        {`${dialogStatus} New Item`}
      </button>
      {dialogStatus === "Modify" && (
        <button
          onClick={() => {
            setDialogStatus("Add");
            setName("");
            setBrand("");
            setNumberAvailable(0);
            setPrice(0);
          }}
        >
          Cancel
        </button>
      )}
    </>
  );
};
