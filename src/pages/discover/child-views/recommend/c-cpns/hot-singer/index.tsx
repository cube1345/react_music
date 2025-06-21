import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { HotSingerWrapper, SingerList, SingerItem, SingerImg, SingerInfo } from './style';
import AreaHeaderV2 from '@/components/area-header-v2';

const singerListData = [
  {
    id: 1,
    name: '张惠妹aMEI',
    desc: '台湾歌手张惠妹',
    imgUrl: '/src/assets/img/singer1.jpg', 
  },
  {
    id: 2,
    name: '吴莫愁Momo',
    desc: '《中国好声音》选…',
    imgUrl: '/src/assets/img/singer2.jpg',
  },
  {
    id: 3,
    name: '孙楠',
    desc: '歌手孙楠 代表作《…',
    imgUrl: '/src/assets/img/singer3.jpg',
  },
  {
    id: 4,
    name: '麦田老狼',
    desc: '歌手，音乐人。代…',
    imgUrl: '/src/assets/img/singer4.jpg',
  },
  {
    id: 5,
    name: '陈楚生',
    desc: '唱作歌手',
    imgUrl: '/src/assets/img/singer5.jpg',
  },
];

interface DownloadProps {
  children?: ReactNode;
}

const HotSinger: FC<DownloadProps> = () => {
  return (
    <HotSingerWrapper>
      <AreaHeaderV2 title="入驻歌手" moreText="查看更多" moreLink="#/discover/artist" />
      <SingerList>
        {singerListData.map((item) => (
          <SingerItem key={item.id}>
            <SingerImg src={item.imgUrl} alt={item.name} />
            <SingerInfo>
              <h3 className="singer-name">{item.name}</h3>
              <p className="singer-desc">{item.desc}</p>
            </SingerInfo>
          </SingerItem>
        ))}
      </SingerList>
    </HotSingerWrapper>
  );
};

export default memo(HotSinger);