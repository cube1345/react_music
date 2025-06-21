import { useAppDispatch } from '@/store';
import React, { memo, useEffect , useState } from 'react';
import type { FC, ReactNode } from 'react';
import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
} from './store/recommend';
import TopBanner from './c-cpns/top-banner';
import MainContainer from './c-cpns/main-container';
import LoginModal from '@/components/login-modal';


interface DownloadProps {
  children?: ReactNode;
}
const Recommend: FC<DownloadProps> = () => {
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchBannerDataAction());
    dispatch(fetchHotRecommendAction());
  }, []);


    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openLoginModal = () => {
      setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
      setIsLoginModalOpen(false);
    };

    const handleSwitchLoginMethod = () => {
      alert('切换到账号密码登录方式');
    };



  return (
    <>
      <TopBanner />
      <MainContainer onPlayClick={openLoginModal} />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onSwitchMethod={handleSwitchLoginMethod}
      />
    </>
  );
};
export default memo(Recommend);
