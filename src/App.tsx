import React from 'react';
import { Link , useRoutes} from 'react-router-dom';
import routes from '@/router';
import '@/assets/css/index.less';
import 'normalize.css';
import { Suspense } from 'react';
function App() {
  return (
    <>
       <div className='nav'>
        <Link to="/discover">发现音乐</Link>
        <Link to="/download">下载</Link>
        <Link to="/focus">关注</Link>
        <Link to="/mine">我的</Link>
       </div>
       <Suspense fallback={<div>Loading...</div>}>
        <div className='main'>{useRoutes(routes)}</div>
       </Suspense>
    </>
  );
}

export default App;
