import { useAppDispatch } from '@/store';
import React, { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { fetchBannerDataAction } from './store/recommend';
import TopBanner from './c-cpns/top-banner';

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
    </>
  );
};
export default memo(Recommend);
