import styled from 'styled-components';

/* 顶部栏 */
export const HeaderWrapper = styled.div`
  height: 60px;
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
`;

/* 顶部栏左半部导航以及logo */
export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    width: 200px;
    height: 60px;
    background-position: 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left top;
    }
  }

  .content {
    color: white;
    display: flex;
    margin-left: 20px;
    align-items: center;
    height: 100%;

    /* React的link标签会被渲染成HTML的a标签 */
    a {
      color: #cccccc;
      text-decoration: none;
      padding: 0 15px;
      height: 100%;
      line-height: 60px;
      font-size: 20px;
      display: inline-block;
      min-width: 80px;
      text-align: center;
      &:hover {
        color: white;
        background-color: #187cb7;
      }
    }
  }
`;

/* 顶部栏右半部分搜索框 */
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px; // 修改右边距为20px

  .ant-input-affix-wrapper {
    border-radius: 16px;
    width: 230px;
    margin-right: 30px;

    .ant-input-prefix {
      margin-right: 8px;
    }

    .ant-input {
      font-size: 12px;

      &::placeholder {
        color: #9b9b9b;
      }
    }

    &:focus {
      outline: none;
    }
  }

  .ant-btn {
    color: #fff;
    border: none;
    height: 32px;
    padding: 0 16px;
  }
`;
