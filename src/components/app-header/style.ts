import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 60px;
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
`;

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

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;

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
