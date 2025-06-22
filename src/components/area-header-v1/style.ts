import styled from 'styled-components';

export const HeaderV1Wrapper = styled.div`
  height: 33px;
  border-bottom: 3px solid #c10d0c;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;

  .icon-start {
    height: 20px;
    margin: 0 -5px;
  }
  .left {
    display: flex;
    align-items: center;
    flex: 1;
  }
  .title {
    font-size: 20px;
    font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
    margin-right: 30px;
    white-space: nowrap;
  }

  .keywords {
    display: flex;
    align-items: center;
    flex: 1;
    white-space: nowrap;

    .item {
      position: relative;
      top: 2px;
      flex: 1;
      min-width: 10px;
      display: flex;

      .divider {
        margin: 0 10px;
        color: #ccc;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    margin-left: 100px;
    padding-left: 100px;

    .more {
      margin-left: 200px;
      margin-right: 2px;
    }

    .icon {
      width: 12px;
      height: 12px;
      background-position: 0 -240px;
    }
  }
`;
