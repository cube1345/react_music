import  { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface DownloadProps {
  children?: ReactNode;
}
const Artist: FC<DownloadProps> = () => {
  return (
    <>
      <div>this is Artist</div>
    </>
  );
};
export default memo(Artist);
