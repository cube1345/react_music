import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { UserLoginWrapper } from './style';


interface DownloadProps {
  children?: ReactNode;
  onPlayClick: ()=> void;
}

const UserLogin: FC<DownloadProps> = ({ onPlayClick }) => {
  return (
    <UserLoginWrapper>
      <img className='buy-VIP' src='/src/assets/img/buy-VIP.jpg' alt='VIP' />
      <div className='VIP-container'>
        <p className='desc'>登录网易云音乐，享受无限收藏与手机同步特权</p>
        <a onClick={() => onPlayClick()}>立即登录</a>
      </div>
    </UserLoginWrapper>
  );
};

export default memo(UserLogin);
