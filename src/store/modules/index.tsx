import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
  name: "counter",
  initialState: {
    name:"Hello",
    count:100,
    message:"Welcome to the Redux Toolkit",
  },
  reducers: {

  }
});

export default counterReducer.reducer;
