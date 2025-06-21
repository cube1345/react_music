import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { RankingWrapper, RankingItemWrapper, RankingImgWrapper, ImgContainer, IconWrapper, RankingTitle } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { PlayCircleOutlined, FolderAddOutlined } from '@ant-design/icons';

const RankingData = [
  { title: '飙升榜', img: '/src/assets/img/ranking1.jpg' },
  { title: '新歌榜', img: '/src/assets/img/ranking2.jpg' },
  { title: '原创榜', img: '/src/assets/img/ranking3.jpg' }
];

interface DownloadProps {
  children?: ReactNode;
}

const TopRanking: FC<DownloadProps> = () => {
  return (
    <>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <RankingWrapper>
        <RankingItemWrapper>  
          {RankingData.map((item, index) => (
            <RankingImgWrapper key={index}>
              <ImgContainer>
                <img
                  className="ranking-img"
                  src={item.img}
                  alt={item.title}
                />
                <RankingTitle>
                  <h3>{item.title}</h3>
                </RankingTitle>
                <IconWrapper>
                  <PlayCircleOutlined />
                  <FolderAddOutlined />
                </IconWrapper>
              </ImgContainer>
            </RankingImgWrapper>
          ))}
        </RankingItemWrapper>
      </RankingWrapper>
    </>
  );
};

export default memo(TopRanking);