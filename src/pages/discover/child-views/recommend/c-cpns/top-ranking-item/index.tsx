/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { TopRankingItemWrapper } from './style';


interface DownloadProps {
  children?: ReactNode;
  itemData: any
}
const TopRankingItem: FC<DownloadProps> = () => {

  return (
    <>
      <TopRankingItemWrapper>

      </TopRankingItemWrapper>
    </>
  );
};
export default memo(TopRankingItem);


/* (
          
        ) */