import { createSlice } from '@reduxjs/toolkit';

const counterReducer = createSlice({
  name: 'counter',
  initialState: {
    name: 'Hello',
    count: 100,
    message: 'Welcome to the Redux Toolkit',
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload;
    },
  },
});

export const { changeMessageAction } = counterReducer.actions;

export default counterReducer.reducer;
