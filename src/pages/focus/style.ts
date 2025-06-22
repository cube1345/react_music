import styled from 'styled-components';
import loginBannerImg from '@/assets/img/notlogin.jpg';

export const BannerWrapper = styled.div`
  margin-top: 100px;
  width: 75%;
  height: 500px;
  background: url(${loginBannerImg}) no-repeat center top;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 220px;
  box-sizing: border-box;
`;

export const LoginBtn = styled.button`
  height: 70px;
  width: 235px;
  background-color: #409eff;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 20px;
  margin-left: 690px;
  margin-top: 250px;


  &:hover {
    background-color: #66b1ff;
  }
`;
