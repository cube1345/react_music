import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { MenuItemsWrapper } from './style';
import recommendData from '@/assets/data/hot-recommend.json';

interface DownloadProps {
  children?: ReactNode;
}
const SongsMenuItem: FC<DownloadProps> = () => {
  return (
    <>
      <MenuItemsWrapper>
        {recommendData.map(item => (
          <div key={item.key} className="recommend-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="image-wrapper">
                <img
                  className="recommend-image"
                  src={item.url}
                  alt={item.text}
                />
              </div>
              <div className="text-desc">{item.text}</div>
            </a>
          </div>
        ))}
      </MenuItemsWrapper>
    </>
  );
};
export default memo(SongsMenuItem);
