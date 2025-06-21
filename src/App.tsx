import React, { Suspense , useState } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';

import '@/assets/css/index.less';
import 'normalize.css';

import AppFooter from './components/app-footer';
import AppHeader from './components/app-header';


import LoginModal from '@/components/login-modal';


function App() {

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
      <AppHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onSwitchMethod={handleSwitchLoginMethod}
      />
    </>
  );
}

export default App;

