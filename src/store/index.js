import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {},
    decrement() {},
    increase() {},
    toggleCounter() {},
  },
});
const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }
  if (action.type === "toggle") {
    return { counter: state.counter, showCounter: !state.showCounter };
  }
  return state;
};
const store = createStore(counterReducer);

export default store;
