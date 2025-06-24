import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import {
  RankingWrapper,
  RankingItemWrapper,
  RankingImgWrapper,
  ImgContainer,
  IconWrapper,
  RankingTitle,
  SongList,
  SongItem,
  NumberSpan,
} from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { PlayCircleOutlined, FolderAddOutlined } from '@ant-design/icons';

const RankingData = [
  {
    title: '飙升榜',
    img: '/src/assets/img/ranking1.jpg',
    songs: [
      '奢香夫人',
      '悬溺',
      '凄美地',
      '山茶花读不懂白玫瑰',
      '一路生花',
      '小苹果',
      '后来',
      '青花瓷',
      '海阔天空',
      '体面',
      '星辰的约定',
    ],
  },
  {
    title: '新歌榜',
    img: '/src/assets/img/ranking2.jpg',
    songs: [
      '予你',
      '雪地里相爱',
      '凄美地（钢琴版）',
      '爱人错过',
      '悬溺(DJ版)',
      '奢香夫人（新版）',
      '一路生花（抒情版）',
      '小苹果（电音版）',
      '后来（纯享版）',
      '青花瓷（古风新编）',
      '时光的涟漪',
    ],
  },
  {
    title: '原创榜',
    img: '/src/assets/img/ranking3.jpg',
    songs: [
      '凄美地',
      '悬溺',
      '奢香夫人',
      '一路生花',
      '小苹果',
      '后来',
      '青花瓷',
      '海阔天空',
      '体面',
      '芒种',
      '彩虹尽头的梦',
    ],
  },
];

interface TopRankingProps {
  children?: ReactNode;
  onPlayClick: () => void;
}

const TopRanking: FC<TopRankingProps> = ({ onPlayClick }) => {
  return (
    <>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <RankingWrapper>
        <RankingItemWrapper>
          {RankingData.map((item, index) => (
            <RankingImgWrapper key={index}>
              <ImgContainer>
                <img className="ranking-img" src={item.img} alt={item.title} />
                <RankingTitle>
                  <h3>{item.title}</h3>
                </RankingTitle>
                <IconWrapper>
                  <PlayCircleOutlined onClick={onPlayClick} />
                  <FolderAddOutlined onClick={onPlayClick} />
                </IconWrapper>
              </ImgContainer>
              <SongList>
                {item.songs.map((song, songIndex) => (
                  <SongItem key={songIndex}>
                    <NumberSpan isTopThree={songIndex < 3}>
                      {songIndex + 1}.
                    </NumberSpan>
                    {song}
                  </SongItem>
                ))}
              </SongList>
            </RankingImgWrapper>
          ))}
        </RankingItemWrapper>
      </RankingWrapper>
    </>
  );
};

export default memo(TopRanking);
