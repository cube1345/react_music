import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { shallowEqualApp, useAppSelector } from '@/store';
import { useAppDispatch } from '@/store';
import { useEffect } from 'react';
import { fetchBannerDataAction } from '../../store/recommend';

interface DownloadProps {
  children?: ReactNode;
}



const TopBanner: FC<DownloadProps> = () => {
  // 获取dispatch
  const dispatch = useAppDispatch()

  // 发起网络请求
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  // 从store获取数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.reducer.banners // 注意这里的路径
    }),
    shallowEqualApp
  )

  return (
    <>
      <div>
        {banners.map(((item) => {
            return(
              <div key={item.imageUrl}>
                {
                  item.imageUrl
                }
              </div>
            )
        }))}
      </div>
    </>
  );
};
export default memo(TopBanner);
