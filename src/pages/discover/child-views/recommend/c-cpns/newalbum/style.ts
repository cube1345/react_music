import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  width: 100%;
  background: #f5f5f5;
  padding: 20px 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.div`
  width: 600px;
  .ant-carousel .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

export const AlbumGroup = styled.div`
  display: flex !important;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
`;

export const AlbumItem = styled.div`
  width: 100px;
  margin: 0 8px;
  text-align: center;
`;

export const AlbumCover = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
`;

export const AlbumName = styled.div`
  margin-top: 6px;
  font-size: 13px;
  font-weight: bold;
  a {
    color: #222;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #c20c0c;
    }
  }
`;

export const SingerName = styled.div`
  font-size: 12px;
  color: #666;
  a {
    color: #666;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #c20c0c;
    }
  }
`;

export const CarouselButton = styled.button`
  width: 28px;
  height: 60px;
  border: none;
  background-color: #f5f5f5;

  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 10px;

`;
