import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { discoverMenu } from '@/assets/data/local_data';
import { NavWrapper } from './style';
import { NavLink } from 'react-router-dom';
import '@/assets/css/common.less';

interface DownloadProps {
  children?: ReactNode;
}
const ChildCPN: FC<DownloadProps> = () => {
  return (
    <>
      <NavWrapper className="wrap-h1">
        <div className="nav">
          {discoverMenu.map(item => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </div>
      </NavWrapper>
    </>
  );
};
export default memo(ChildCPN);
