import React, { useState } from 'react';
import { BannerWrapper, LoginBtn } from './style';
import LoginModal from '@/components/login-modal/index';

const Focus: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <BannerWrapper>
        <LoginBtn onClick={openModal}>立即登录</LoginBtn>
      </BannerWrapper>
      <LoginModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSwitchMethod={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </>
  );
};

export default Focus;
