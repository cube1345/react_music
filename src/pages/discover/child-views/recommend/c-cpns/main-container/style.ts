import styled from 'styled-components';
import wrapBg1 from '@/assets/img/wrap-bg1.jpg';

export const RecommendWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;

  > .container {
    width: 980px;
    margin: 0 auto;
    display: flex;
    border: 1px solid #d3d3d3;
    background: #fff url(${wrapBg1}) no-repeat center;
    background-size: cover;

    > * {
      box-sizing: border-box;
    }
  }

  > .container .left {
    flex: 1;
    padding: 20px;
    border-right: 1px solid #d3d3d3;
  }

  > .container .right {
    flex: 0 0 250px;
    padding: 20px;
    margin-left: 0;
  }
`;
