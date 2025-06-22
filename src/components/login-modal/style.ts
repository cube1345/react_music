import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  min-width: 340px;
  padding: 32px 24px 16px 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 22px;
  cursor: pointer;
  &:after {
    content: '×';
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QrCodeContainer = styled.div`
  margin-bottom: 16px;
  .qr-code-image {
    width: 160px;
    height: 160px;
    border-radius: 8px;
    background: #f5f5f5;
  }
`;

export const HintText = styled.div`
  color: #888;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const ToggleButton = styled.button`
  background: #f5f5f5;
  border: none;
  color: #333;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 8px;
  &:hover {
    background: #e6e6e6;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

export const OtherLoginButton = styled.button`
  background: none;
  border: none;
  color: #1677ff;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
