import styled from 'styled-components';

export const HotAnchorWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transform: translate(-20px , 0);
`;

export const AnchorList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px; // 每个主播项间距
`;

export const AnchorItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const AnchorImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 4px; // 可选：让头像圆角
  object-fit: cover;
`;

export const AnchorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .anchor-name {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 4px 0;
    color: #333;
  }

  .anchor-desc {
    font-size: 14px;
    color: #666;
    margin: 0;
    line-height: 1.4;
  }
`;