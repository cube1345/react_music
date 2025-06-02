import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface DownloadProps {
  children?: ReactNode;
}
const Ranking: FC<DownloadProps> = () => {
  return (
    <>
      <div>this is Ranking</div>
    </>
  );
};
export default memo(Ranking);
