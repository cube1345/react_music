import styled from "styled-components";

export const UserLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: 245px;
  background: #d5d5d5;
  transform: translate(-20px , -20px);

  .buy-VIP {
    width: 250px;
    height: auto;
    margin-bottom: 15px;
    transform: translate(4px , 0);
  }
  


  .desc {
    line-height: 1.5;
    text-align: center;
    margin-bottom: 15px;
    transform: none;
    font-size: 14px;
  }
  
  a {
    margin-left: 20px;
    display: inline-block;
    width: 100%;
    max-width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    background: red;
    border-radius: 20px;
    font-weight: 500;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 16px rgba(230, 62, 76, 0.4);
      background: linear-gradient(135deg, #ff5261 0%, #ff7b88 100%);
    }
  }
`;