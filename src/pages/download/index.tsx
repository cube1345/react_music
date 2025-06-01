import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface DownloadProps {
  children?: ReactNode;
}
const Download: FC<DownloadProps> = () => {
  return (
    <>
      <div>this is Download</div>
    </>
  );
};
export default memo(Download);
