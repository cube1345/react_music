import { useAppDispatch } from '@/store';
import React, { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
} from './store/recommend';
import TopBanner from './c-cpns/top-banner';
import MainContainer from './c-cpns/main-container';

interface DownloadProps {
  children?: ReactNode;
}
const Recommend: FC<DownloadProps> = () => {
  const dispatch = useAppDispatch();

  // Define the openLoginModal function
  const openLoginModal = () => {
    // TODO: Implement modal opening logic here
    console.log('Login modal opened');
  };

  useEffect(() => {
    dispatch(fetchBannerDataAction());
    dispatch(fetchHotRecommendAction());
  }, []);

  return (
    <>
      <TopBanner />
      <MainContainer onPlayClick={openLoginModal} />
    </>
  );
};
export default memo(Recommend);
