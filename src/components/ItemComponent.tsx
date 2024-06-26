import React from "react";
import styled from "styled-components";
import { fruitProp, DELETE_FRUIT } from "../reduxComponent/slice";
import { useDispatch } from "react-redux";

const ItemComponent: React.FC<{
  fruitInfo: fruitProp;
  setDialogStatus: (status: string) => void;
  setShowModal: (show: boolean) => void;
  setFruitInfo: (fruit: fruitProp) => void;
}> = ({ fruitInfo, setDialogStatus, setShowModal, setFruitInfo }) => {
  const dipatch = useDispatch();
  return (
    <Warp>
      <GridHeader>header</GridHeader>
      <GridSeperator></GridSeperator>
      <GridBody>
        <div>fruit name: {fruitInfo.name}</div>
        <div>fruit brand: {fruitInfo.brand}</div>
        <div>fruit price: {fruitInfo.price}</div>
        <div>number of fruit available: {fruitInfo.numberAvailable}</div>
        <GridButtons>
          <button
            onClick={() => {
              dipatch(DELETE_FRUIT({ id: fruitInfo.id }));
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setFruitInfo({
                id: fruitInfo.id,
                name: fruitInfo.name,
                brand: fruitInfo.brand,
                price: Number(fruitInfo.price),
                numberAvailable: Number(fruitInfo.numberAvailable),
                numberSold: Number(fruitInfo.numberSold),
              });
              setDialogStatus("Modify");
              setShowModal(true);
            }}
          >
            Modify
          </button>
        </GridButtons>
      </GridBody>
    </Warp>
  );
};

export default ItemComponent;

const Warp = styled.div`
  display: grid;
  grid-template-rows: 2fr 2px 1fr;
  grid-template-areas:
    "header"
    "seperator"
    "body";
  padding: 8px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  background: white;
  box-shadow: 0 4px 8px 0 grey;
  &:hover {
    border: 2px solid grey;
    box-shadow: 0 8px 16px 0 grey;
  }
`;

const GridHeader = styled.div`
  grid-area: header;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  img {
    margin-top: -8px;
    margin-left: -8px;
    margin-right: -8px;
  }
`;
const GridSeperator = styled.div`
  background: grey;
  margin-left: 2px;
  margin-right: 2px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
`;
const GridBody = styled.div`
  grid-area: body;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const GridButtons = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
  gap: 4px;
  button {
    width: 100%;
    border-radius: 4px;
  }
`;
