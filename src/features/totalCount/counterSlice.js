import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      if (state.value > 0) state.value--;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export const selectCounter = (state) => state.counter.value;
export default counterSlice.reducer;
