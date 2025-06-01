import { createSlice } from '@reduxjs/toolkit';

const counterReducer = createSlice({
  name: 'counter',
  initialState: {
    name: 'Hello',
    count: 100,
    message: 'Welcome to the Redux Toolkit',
  },
  reducers: {
    /* 存放对应修改函数 */
    changeMessageAction(state, { payload }) {
      state.message = payload; // 修改message
    },
  },
});

export const { changeMessageAction } = counterReducer.actions; // 导出修改函数

export default counterReducer.reducer;
