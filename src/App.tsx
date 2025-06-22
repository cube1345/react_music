import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';

import '@/assets/css/index.less';
import 'normalize.css';

import AppFooter from './components/app-footer';
import AppHeader from './components/app-header';
import AppPlayerbar from './pages/player/app-playerbar';



function App() {



  return (
    <>
      <AppHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />


      {/* 播放器 */}
      <AppPlayerbar />
    </>
  );
}

export default App;

