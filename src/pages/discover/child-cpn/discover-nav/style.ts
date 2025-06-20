import styled from 'styled-components';

export const NavWrapper = styled.div`
    height: 30px;
    background-color: #c20c0c;

    .nav{
      display: flex;
      padding-left: 220px;
      position: relative;
      top: 3px;

      .item{
        a{
          display: inline-block;
          height: 25px;
          line-height: 20px;
          padding: 0 13px;
          margin: 2px 27px 0;
          color: #fff;
          font-size: 12px;
        }

        &:hover,
        &.active{
          text-decoration: none;
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
    `

