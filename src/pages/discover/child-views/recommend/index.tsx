import { useAppDispatch } from '@/store';
import React, { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { fetchBannerDataAction } from './store/recommend';
import TopBanner from './c-cpns/top-banner';
import MainContainer from './c-cpns/main-container';

interface DownloadProps {
  children?: ReactNode;
}
const Recommend: FC<DownloadProps> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
  }, []);

  return (
    <>
      <TopBanner />
      <MainContainer />
    </>
  );
};
export default memo(Recommend);
