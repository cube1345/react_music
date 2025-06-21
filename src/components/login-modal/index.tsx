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

// 登录弹窗组件
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
            <img
              src="https://picsum.photos/200/200?random=1"
              alt="登录二维码"
              className="qr-code-image"
            />
          </QrCodeContainer>
          <HintText>使用 网易云音乐APP 扫码登录</HintText>
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
