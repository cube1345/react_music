import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { RecommendWrapper } from './style';
import HotRecommend from '../hot-recommend';
import SongsItems from '../songs-items';
import Newalbum from '../newalbum';
import TopRanking from '../top-ranking';
import UserLogin from '../user-login';

interface DownloadProps {
  children?: ReactNode;
}
const MainContainer: FC<DownloadProps> = () => {
  return (
    <>
      <RecommendWrapper>
        <div className="container wrap-h2">
          <div className="left">
            <HotRecommend />
            <SongsItems />
            <Newalbum />
            <TopRanking />
          </div>
          <div className="right">
            <UserLogin />
            <div className='hot-singer'>

            </div>
            <div className='hot-live'>
              
            </div>  
          </div>
        </div>
      </RecommendWrapper>
    </>
  );
};
export default memo(MainContainer);
