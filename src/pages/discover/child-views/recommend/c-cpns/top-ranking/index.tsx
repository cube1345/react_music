import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { RankingWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';

interface DownloadProps {
  children?: ReactNode;
}
const TopRanking: FC<DownloadProps> = () => {
  return (
    <>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <RankingWrapper>
        
      </RankingWrapper>
    </>
  );
};
export default memo(TopRanking);

