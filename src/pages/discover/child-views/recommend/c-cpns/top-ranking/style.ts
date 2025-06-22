import styled from 'styled-components';
import rankingBgImg from '@/assets/img/ranking-bg-img.png';

export const RankingWrapper = styled.div`
  display: flex;

  margin-top: 20px;
  height: 472px;
  background: url(${rankingBgImg});
`;

export const RankingItemWrapper = styled.div`
  display: flex;
`;

export const RankingTitle = styled.div`
  position: absolute;
  left: 120px;
  top: 20px;

  h3 {
    font-size: 16px;
    color: #333;
    margin-bottom: 8px;
  }
`;

export const RankingImgWrapper = styled.div`
  width: 230px;
  overflow: hidden;

  img {
    width: 80px;
    height: 80px;
  }

  &:last-child {
    width: 228px;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 120px;
  display: flex;
  gap: 10px;

  svg {
    font-size: 24px;
    color: #b5b5b5;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: #666666;
      transform: scale(1.1);
    }
  }
`;

export const SongList = styled.div`
  padding: 0 20px;
  margin-top: 10px;
`;

export const SongItem = styled.p`
  margin-bottom: 15.6px;
`;

interface NumberSpanProps {
  isTopThree?: boolean;
}

export const NumberSpan = styled.span<NumberSpanProps>`
  color: ${props => (props.isTopThree ? 'red' : 'inherit')};
  margin-right: 5px;
`;
