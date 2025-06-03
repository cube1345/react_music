import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { discoverMenu } from '@/assets/data/local_data';
import { NavWrapper } from './style';
import { NavLink } from 'react-router-dom';

interface DownloadProps {
  children?: ReactNode;
}
const chileCPN: FC<DownloadProps> = () => {
  return (
    <>
      <NavWrapper>
        {
          discoverMenu.map(item => {
              return (
                <div className='item' key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            }
          )
        }
      </NavWrapper>
    </>
  );
};
export default memo(chileCPN);
