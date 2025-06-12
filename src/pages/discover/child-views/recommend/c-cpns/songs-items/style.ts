import styled from "styled-components";


export const MenuItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;

  .recommend-item {
    a {
      text-decoration: none;
      color: #333;

      &:hover {
        text-decoration: underline;  // 直接使用文本下划线
        color: #666;
      }

      .text-desc {
        margin-top: 5px;
        font-size: 12px;
        line-height: 1.4;
      }
    }
  }
`
