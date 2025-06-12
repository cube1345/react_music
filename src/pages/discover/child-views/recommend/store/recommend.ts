/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners, getHotRecommend } from '../service/recommend';

export const fetchBannerDataAction = createAsyncThunk(
  'recommend/banners',
  async () => {
    const res = await getBanners();
    return res.banners;
  }
);

export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (arg , {dispatch}) => {
    const res = await getHotRecommend(8)
    dispatch(changeHotRecommendAction(res.result))
    // console.log(res);

  }
)

interface IRecommendState {
  banners: any[];
  hotRecommend: any[];
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: []
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeHotRecommendAction(state,{ payload }) {
      state.banners = payload
    }

  },
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

export const {changeHotRecommendAction} = recommendSlice.actions
export default recommendSlice.reducer;
