import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { HotSingerWrapper } from './style';
import AreaHeaderV2 from '@/components/area-header-v2';

interface DownloadProps {
  children?: ReactNode;
}
const HotSinger: FC<DownloadProps> = () => {
  return (
    <>
      <HotSingerWrapper>
        <AreaHeaderV2 title='入驻歌手' moreText='查看更多' moreLink='#/discover/artist' />
      </HotSingerWrapper>
    </>
  );
};
export default memo(HotSinger);
