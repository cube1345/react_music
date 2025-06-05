import React from 'react';
import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface DownloadProps {
  children?: ReactNode;
}
const Album: FC<DownloadProps> = () => {
  return (
    <>
      <div>this is Album</div>
    </>
  );
};
export default memo(Album);
