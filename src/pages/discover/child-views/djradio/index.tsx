import React , { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface DownloadProps {
  children?: ReactNode;
}
const Djradio: FC<DownloadProps> = () => {
  return (
    <>
      <div>this is Djradio</div>
    </>
  );
};
export default memo(Djradio);
