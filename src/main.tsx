import React  from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import '@/assets/css/index.less';
import App from '@/App.tsx';
import { HashRouter } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
);

