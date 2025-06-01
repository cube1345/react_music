import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface DownloadProps {
  children?: ReactNode;
}
const Songs: FC<DownloadProps> = () => {
  return (
    <>
      <div>this is Songs</div>
    </>
  );
};
export default memo(Songs);
