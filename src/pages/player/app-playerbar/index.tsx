import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface DownloadProps {
  children?: ReactNode;
}
const AppPlayBar: FC<DownloadProps> = () => {
  return (
    <>
      <div>this is AppPlayBar</div>
    </>
  );
};
export default memo(AppPlayBar);
