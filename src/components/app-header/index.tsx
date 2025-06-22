import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style';

import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface DownloadProps {
  children?: ReactNode;
}
const AppHeader: FC<DownloadProps> = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderLeft>
          <a className="logo">
            <img src="src\assets\img\logo.jpg" alt="logo" />
          </a>
          <div className="content wrap-header">
            <Link to="/discover">发现</Link>
            <Link to="https://music.163.com/#/download">下载</Link>
            <Link to="/focus">关注</Link>
            <Link to="https://music.163.com/store/product">商城</Link>
            <Link to="https://music.163.com/st/musician">音乐人</Link>
            <Link to="/mine">我的</Link>
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            placeholder="Lemon(中文版) --时代少年团"
            prefix={<SearchOutlined />}
          />
          <Button type="link">创作者中心</Button>
        </HeaderRight>
      </HeaderWrapper>
    </>
  );
};
export default memo(AppHeader);
