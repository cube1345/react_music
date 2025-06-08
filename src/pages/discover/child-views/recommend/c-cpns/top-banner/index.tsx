import React, { memo, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { BannerControl, BannerLeft, BannerRight, ContainerWrapper, BannerBg, BannerContent } from './style';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';

interface DownloadProps {
  children?: ReactNode;
}

const TopBanner: FC<DownloadProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<CarouselRef>(null);
  
  const handleBeforeChange = (from: number, to: number) => {
    setCurrentIndex(to);
  };

  function handlePrevClick() {
    bannerRef.current?.prev();
  }

  function handleNextClick() {
    bannerRef.current?.next();
  }

  return (
    <>
    <ContainerWrapper>
      <BannerBg>
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(/src/assets/img/top-bgimg${currentIndex + 1}.jpg)`
          }}
        />
      </BannerBg>

      <BannerContent>
        <BannerLeft>
          <Carousel
            autoplay
            autoplaySpeed={1500}
            effect="fade"
            ref={bannerRef}
            beforeChange={handleBeforeChange}
          >
            {[...Array(8)].map((_, index) => (
              <div key={index} className="banner-item">
                <img
                  className="banner-img"
                  src={`/src/assets/img/top-img${index + 1}.jpg`}
                  alt="banner"
                />
              </div>
            ))}
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <div className='img-container'>
            <img src='src\assets\img\top-right-img.jpg' alt='密码的我图呢？'></img>
            <div className='img-text'>时代少年团，我们喜欢你~</div>
          </div>
        </BannerRight>
        <BannerControl>
          <button className='btn left' onClick={handlePrevClick}>&lt;</button>
          <button className='btn right' onClick={handleNextClick}>&gt;</button>
        </BannerControl>
        </BannerContent>
      </ContainerWrapper>
    </>
  );
};
export default memo(TopBanner);
