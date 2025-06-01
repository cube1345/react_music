import React  from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import '@/assets/css/index.less';
import App from '@/App.tsx';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>{/* 使用provider注入store的内容 */}
    <HashRouter>{/* 路由相关 */}
      <App />
    </HashRouter>
  </Provider>
);

