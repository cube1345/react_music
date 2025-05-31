import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface DownloadProps {
  children?: ReactNode;
}
const Recommend: FC<DownloadProps> = () => {
  return (
    <>
      <div>this is Recommend</div>
    </>
  );
};
export default memo(Recommend);
