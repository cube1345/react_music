import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface DownloadProps {
  children?: ReactNode;
}
const Mine: FC<DownloadProps> = () => {
  return (
    <>
      <div>this is Mine</div>
    </>
  );
};
export default memo(Mine);
