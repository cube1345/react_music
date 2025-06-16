import AreaHeaderV1 from '@/components/area-header-v1';
import React, { memo, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import { AlbumWrapper } from './style';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';

interface DownloadProps {
  children?: ReactNode;
}
const NewAlbum: FC<DownloadProps> = () => {

  const bannerRef = useRef<CarouselRef>(null)

  function handlePreClick(){
    bannerRef.current?.prev()
  }
  function handleNextClick(){
    bannerRef.current?.next()
  }

  return (
    <>
      <AlbumWrapper>
        <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
        <div className="content">
          <button className='arrow-left' onClick={handlePreClick}>&lt;</button>
          <div className="banner">
            <Carousel ref={bannerRef} dots={false} speed={1000}>

            </Carousel>
          </div>
          <button className='arrow-right' onClick={handleNextClick}>&gt;</button>
        </div>
      </AlbumWrapper>
    </>
  );
};
export default memo(NewAlbum);
