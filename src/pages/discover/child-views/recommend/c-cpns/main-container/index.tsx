import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { RecommendWrapper} from './style';
import HotRecommend from '../hot-recommend';
import SongsItems from '../songs-items';

interface DownloadProps {
  children?: ReactNode;
}
const MainContainer: FC<DownloadProps> = () => {
  return (
    <>
    <RecommendWrapper>
      <div className='container wrap-h2'>
          <div className='left'>
            <HotRecommend />
            <SongsItems />
            Left
          </div>
          <div className='right'>Right</div>
      </div>
    </RecommendWrapper>

    </>
  );
};
export default memo(MainContainer);
