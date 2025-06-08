import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners } from '../service/recommend';

export const fetchBannerDataAction = createAsyncThunk(
  'recommend/banners',
  async () => {
    const res = await getBanners();
    return res.banners;
  }
);

interface IRecommendState {
  banners: [];
}

const initialState: IRecommendState = {
  banners: [],
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBannerDataAction.pending, () => {
        console.log("pending");
      })
      .addCase(fetchBannerDataAction.fulfilled, () => {
        // state.banners = payload;
      })
      .addCase(fetchBannerDataAction.rejected, () => {
        console.log('rejected');
      });
  },
});

export default recommendSlice.reducer;
