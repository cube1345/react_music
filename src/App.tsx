import React from 'react';
import { Link, useRoutes } from 'react-router-dom';
import routes from '@/router';
import '@/assets/css/index.less';
import 'normalize.css';
import { Suspense } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from './store';

// import type { IRootState } from '@/store';

// /* 以下是获取Store里面的变量的类型 */
// /* 首先，可以直接使用StateType={name：string，age：num} 这种方法*/
// /* 这个方法的弊端在于每一次新增store的内容时，都要手动添加新的类型 */
// /* 以下这个方法可以自动获取类型 */
// type GetStateFnType = typeof store.getState /* 先获取函数的类型 */
// type IRootState = ReturnType<GetStateFnType>/* 再获取函数返回值的类型，<>填函数的类型的变量 */



function App() {
  const { count, message } = useAppSelector(
    (state) => ({//useAppSelector中使用了TypedUseSelectorHook<IRootState>，所以state的类型是IRootState，这里不用写类型名因为已经自动推导得到
      count: state.counter.count,
      message: state.counter.message,
    }),
    shallowEqual
  );

  return (
    <>
    <div>count:{count}</div>
    <div>message:{message}</div>
      <div className="nav">
        <Link to="/discover">发现</Link>
        <Link to="/download">下载</Link>
        <Link to="/focus">关注</Link>
        <Link to="/mine">我的</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </>
  );
}

export default App;
