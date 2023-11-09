import { createSlice } from '@reduxjs/toolkit';

type DuaState = {
  catagoryId: number;
  subcatagoryId: number;
  duaId: number;
};

const initialState = {
  catagoryId: 1,
  subcatagoryId: 1,
  duaId: 1,
} as DuaState;

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setCatagoryId: (state, { payload }) => {
      state.catagoryId = payload.id;
    },
    setSubcatagoryId: (state, { payload }) => {
      state.subcatagoryId = payload.id;
    },
    setDuaId: (state, { payload }) => {
      state.duaId = payload.id;
    },
  },
});

export const { setCatagoryId, setSubcatagoryId, setDuaId } = common.actions;
export default common.reducer;
