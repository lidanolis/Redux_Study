import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type fruitProp = {
  id: string;
  name: string;
  brand: string;
  price: number;
  numberSold: number;
  numberAvailable: number;
};
const initialFruitState: fruitProp[] = [];
const fruitSlice = createSlice({
  name: "fruit",
  initialState: initialFruitState,
  reducers: {
    ADD_NEW_FRUIT: (state, action) => {
      if (
        state.some(
          (perFruit) =>
            perFruit.brand === action.payload.brand &&
            perFruit.name === action.payload.name
        )
      ) {
        return state;
      }
      return [...state, { ...action.payload, id: uuidv4() }];
    },
    MODIFY_FRUIT: (state, action) => {
      if (
        state.some(
          (perFruit) =>
            perFruit.brand === action.payload.brand &&
            perFruit.name === action.payload.name &&
            perFruit.id !== action.payload.id
        )
      ) {
        return state;
      }
      return state.map((perFruit) => {
        if (perFruit.id === action.payload.id) {
          return {
            ...perFruit,
            ...action.payload,
          };
        }
        return perFruit;
      });
    },
    DELETE_FRUIT: (state, action) => {
      return state.filter((perFruit) => perFruit.id !== action.payload.id);
    },
  },
});

export default fruitSlice.reducer;
export const { ADD_NEW_FRUIT, DELETE_FRUIT, MODIFY_FRUIT } = fruitSlice.actions;
