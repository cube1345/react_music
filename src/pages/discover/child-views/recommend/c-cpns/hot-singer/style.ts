import styled from 'styled-components';

export const HotSingerWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transform: translate(-20px, 0);
`;

export const SingerList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SingerItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    opacity: 0.8;
  }
`;

export const SingerImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  object-fit: cover;
`;

export const SingerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .singer-name {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 4px 0;
    color: #333;
  }

  .singer-desc {
    font-size: 14px;
    color: #666;
    margin: 0;
  }
`;
