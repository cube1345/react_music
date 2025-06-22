import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import {
  HotAnchorWrapper,
  AnchorList,
  AnchorItem,
  AnchorImg,
  AnchorInfo,
} from './style';
import AreaHeaderV2 from '@/components/area-header-v2';

const anchorListData = [
  {
    id: 1,
    name: '陈立',
    desc: '心理学家、美食家陈立教授',
    imgUrl: '/src/assets/img/anchor1.jpg',
  },
  {
    id: 2,
    name: '刘维-Julius',
    desc: '歌手、播客节目《维维道来…',
    imgUrl: '/src/assets/img/anchor2.jpg',
  },
  {
    id: 3,
    name: '莫非定律乐团',
    desc: '男女双人全创作独立乐团',
    imgUrl: '/src/assets/img/anchor3.jpg',
  },
  {
    id: 4,
    name: '碎嘴许美达',
    desc: '脱口秀网络红人',
    imgUrl: '/src/assets/img/anchor4.jpg',
  },
  {
    id: 5,
    name: '银临Rachel',
    desc: '',
    imgUrl: '/src/assets/img/anchor5.jpg',
  },
];

interface HotAnchorProps {
  children?: ReactNode;
}

const HotAnchor: FC<HotAnchorProps> = () => {
  return (
    <HotAnchorWrapper>
      <AreaHeaderV2 title="热门主播" />
      <AnchorList>
        {anchorListData.map(item => (
          <AnchorItem key={item.id}>
            <AnchorImg src={item.imgUrl} alt={item.name} />
            <AnchorInfo>
              <h3 className="anchor-name">{item.name}</h3>
              <p className="anchor-desc">{item.desc}</p>
            </AnchorInfo>
          </AnchorItem>
        ))}
      </AnchorList>
    </HotAnchorWrapper>
  );
};

export default memo(HotAnchor);
