import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  /* 内容区整体容器 */
  .content {
    position: relative; /* 为箭头绝对定位提供参考 */
    display: flex;      /* Flex 布局让子元素对齐 */
    align-items: center;/* 垂直居中 */
    height: 200px;
    margin-top: 10px;
    background-color: #f5f5f5;
    padding: 0 10px;    /* 左右留空隙，避免箭头贴边 */

    /* 解决轮播区域溢出问题 */
    overflow: hidden;
  }


  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 70px;
    border: none;
    border-radius: 4px;
    background-color: rgba(0,0,0,0.3);
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;


    &:hover {
      background-color: rgba(0,0,0,0.5);
    }
  }


  .arrow-left {
    left: 10px;
  }

  .arrow-right {
    right: 10px;
  }

  .banner {
    flex: 1;
    margin: 0 10px;
  }
`;
