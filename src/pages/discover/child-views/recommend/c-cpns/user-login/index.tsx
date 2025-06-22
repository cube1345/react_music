import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { UserLoginWrapper } from './style';

interface DownloadProps {
  children?: ReactNode;
  onPlayClick: () => void;
}

const UserLogin: FC<DownloadProps> = ({ onPlayClick }) => {
  return (
    <UserLoginWrapper>
      <a
        href="https://www.bilibili.com/video/BV1XpJHz1EP2/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="buy-VIP" src="/src/assets/img/buy-VIP.jpg" alt="VIP" />
      </a>
      <div className="VIP-container">
        <p className="desc">登录网易云音乐，享受无限收藏与手机同步特权</p>
        <a onClick={() => onPlayClick()} className="login-button">
          立即登录
        </a>
      </div>
    </UserLoginWrapper>
  );
};

export default memo(UserLogin);
