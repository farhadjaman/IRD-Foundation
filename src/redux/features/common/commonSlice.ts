import { createSlice } from "@reduxjs/toolkit";

type CommonState = {
  value: number;
};

const initialState = {
  value: 0,
} as CommonState;

export const common = createSlice({
  name: "common",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = common.actions;
export default common.reducer;
