import styled from "styled-components";

export const ContainerWrapper = styled.div`
  position: relative;
  height: 297px;
  width: 100%;
  overflow: hidden;
`;

export const BannerBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .bg-image {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 6000px;
    height: 100%;
    background-position: center center;
    background-size: 6000px;
    background-repeat: no-repeat;
    filter: blur(2px);
    opacity: 0.8;
  }
`;

export const BannerContent = styled.div`
  position: relative;
  display: flex;
  width: 980px;
  height: 100%;
  margin: 0 auto;
  z-index: 2;
`;

export const BannerLeft = styled.div`
  width: 730px;
  height: 100%;

  .banner-item {
    .banner-img {
      width: 100%;
      height: 297px;
      object-fit: cover;
    }
  }
`;

export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  flex: 1;
  height: 386px;

  img {
    width: 100%;
    height: 367px;
  }

  .img-text{

    position: absolute;

    bottom: -10px;
    left:730px;
    right:0;
    color: white;
    padding: 20px;
    text-align: center;
    z-index: 2;

  }
`;

export const BannerControl = styled.div`
  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 80px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 30px;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }

  .left {
    left: calc(50% - 540px);
  }

  .right {
    right: calc(0);
  }

`
export const BgWrapper = styled.div`
  width: 100%;
  height: 297px;
  position: relative;
  .ant-carousel {

    .slick-slide {

      .background-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 6000px;
        height: 297px;
        object-fit: cover;
        z-index: 0;
      }
    }
  }
`



// export const ImgWrapper = styled.div`
//   .top-img {
//     display: flex;
//     height: 100%;

//     img {
//       min-width: 100%;
//       height: 100%;
//       object-fit: cover;
//     }
//   }
// `;
