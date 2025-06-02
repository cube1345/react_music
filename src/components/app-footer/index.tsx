import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface DownloadProps {
  children?: ReactNode;
}
const AppFooter: FC<DownloadProps> = () => {
  return (
    <>
      <div>AppFooter</div>
    </>
  );
};
export default memo(AppFooter);
