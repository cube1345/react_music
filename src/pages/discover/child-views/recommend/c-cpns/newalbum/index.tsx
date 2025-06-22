import type { CarouselRef } from 'antd/es/carousel';
import React, { type ReactNode, useRef, type FC, memo } from 'react';
import {
  AlbumWrapper,
  Content,
  Banner,
  AlbumGroup,
  AlbumItem,
  AlbumCover,
  AlbumName,
  SingerName,
  CarouselButton,
} from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { Carousel } from 'antd';
import albumData from '@/assets/data/new_album.json';

interface DownloadProps {
  children?: ReactNode;
}

const NewAlbum: FC<DownloadProps> = () => {
  const bannerRef = useRef<CarouselRef>(null);

  const handlePreClick = () => {
    bannerRef.current?.prev();
  };

  const handleNextClick = () => {
    bannerRef.current?.next();
  };

  return (
    <>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <AlbumWrapper>
        <Content>
          <CarouselButton className="arrow-left" onClick={handlePreClick}>
            &lt;
          </CarouselButton>
          <Banner>
            <Carousel ref={bannerRef} dots={false} speed={1000}>
              <AlbumGroup>
                {albumData.slice(0, 5).map(item => (
                  <AlbumItem key={item.key}>
                    <AlbumCover>
                      <img src={item.url} alt={item.name} />
                    </AlbumCover>
                    <AlbumName>
                      <a
                        href={item.namelink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </AlbumName>
                    <SingerName>
                      <a
                        href={item.singerlink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.singer}
                      </a>
                    </SingerName>
                  </AlbumItem>
                ))}
              </AlbumGroup>
              <AlbumGroup>
                {albumData.slice(5, 10).map(item => (
                  <AlbumItem key={item.key}>
                    <AlbumCover>
                      <img src={item.url} alt={item.name} />
                    </AlbumCover>
                    <AlbumName>
                      <a
                        href={item.namelink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    </AlbumName>
                    <SingerName>
                      <a
                        href={item.singerlink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.singer}
                      </a>
                    </SingerName>
                  </AlbumItem>
                ))}
              </AlbumGroup>
            </Carousel>
          </Banner>
          <CarouselButton className="arrow-right" onClick={handleNextClick}>
            &gt;
          </CarouselButton>
        </Content>
      </AlbumWrapper>
    </>
  );
};

export default memo(NewAlbum);
