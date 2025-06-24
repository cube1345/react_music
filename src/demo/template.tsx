import React ,{ memo } from 'react';
import type { FC, ReactNode } from 'react';

interface DownloadProps {
  children?: ReactNode;
}
const Template: FC<DownloadProps> = () => {
  return (
    <>
      <div>this is Template</div>
    </>
  );
};
export default memo(Template);
