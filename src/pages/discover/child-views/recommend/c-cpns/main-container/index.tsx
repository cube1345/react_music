import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { RecommendWrapper } from './style';
import HotRecommend from '../hot-recommend';
import SongsItems from '../songs-items';
import Newalbum from '../newalbum';
import TopRanking from '../top-ranking';
import UserLogin from '../user-login';
import HotSinger from '../hot-singer';
import HotAnchor from '../hot-anchor';


interface DownloadProps {
  children?: ReactNode;
  onPlayClick?: () => void;
}
const MainContainer: FC<DownloadProps> = ({ onPlayClick }) => {
  return (
    <>
      <RecommendWrapper>
        <div className="container wrap-h2">
            <div className="left">
            <HotRecommend />
            <SongsItems />
            <Newalbum />
            <TopRanking onPlayClick={onPlayClick!} />
            </div>
          <div className="right">
            <UserLogin onPlayClick={onPlayClick!} />
            <HotSinger />
            <HotAnchor />
          </div>
        </div>
      </RecommendWrapper>
    </>
  );
};
export default memo(MainContainer);
