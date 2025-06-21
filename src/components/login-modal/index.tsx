import React from 'react';
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  ModalContent,
  QrCodeContainer,
  HintText,
  ToggleButton,
  Footer,
  OtherLoginButton
} from './style';

import { GithubOutlined } from '@ant-design/icons'

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchMethod: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSwitchMethod }) => {
  if (!isOpen) return null;


  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalHeader>
          <h2>登录网易云音乐</h2>
          <CloseButton onClick={onClose} />
        </ModalHeader>
        <ModalContent>
          <QrCodeContainer>
            <GithubOutlined />
          </QrCodeContainer>
            <img src='src\assets\img\GitHub.jpg'></img>
          <HintText>快来狠狠看我的GitHub主页~</HintText>
          <ToggleButton onClick={onSwitchMethod}>
            选择其他登录模式
          </ToggleButton>
        </ModalContent>
        <Footer>
          <OtherLoginButton onClick={onSwitchMethod}>
            账号密码登录
          </OtherLoginButton>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default LoginModal;
