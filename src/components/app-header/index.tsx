import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface DownloadProps {
  children?: ReactNode;
}
const AppHeader: FC<DownloadProps> = () => {
  return (
    <>
      <div className="nav">
        <Link to="/discover">发现</Link>
        <Link to="/download">下载</Link>
        <Link to="/focus">关注</Link>
        <Link to="/mine">我的</Link>
      </div>
    </>
  );
};
export default memo(AppHeader);
