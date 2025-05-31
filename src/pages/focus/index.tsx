import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface DownloadProps {
  children?: ReactNode;
}
const Focus: FC<DownloadProps> = () => {
  return (
    <>
      <div>this is Focus</div>
    </>
  );
};
export default memo(Focus);
