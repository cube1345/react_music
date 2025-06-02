import React , { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';



import '@/assets/css/index.less';
import 'normalize.css';

import AppFooter from './components/app-footer';
import AppHeader from './components/app-header';


function App() {


  return (
    <>
      <AppHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

    </>
  );
}

export default App;
