import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router';

import '@/assets/css/index.less';
import 'normalize.css';

import AppFooter from './components/app-footer';
import AppHeader from './components/app-header';
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store';
import { changeMessageAction } from './store/modules';

function App() {
  // /* 以下是获取Store里面的变量的类型 */
  // /* 首先，可以直接使用StateType={name：string，age：num} 这种方法*/
  // /* 这个方法的弊端在于每一次新增store的内容时，都要手动添加新的类型 */
  // /* 以下这个方法可以自动获取类型 */
  // type GetStateFnType = typeof store.getState /* 先获取函数的类型 */
  // type IRootState = ReturnType<GetStateFnType>/* 再获取函数返回值的类型，<>填函数的类型的变量 */

  const { count, message } = useAppSelector(
    state => ({
      //useAppSelector中使用了TypedUseSelectorHook<IRootState>，所以state的类型是IRootState，这里不用写类型名因为已经自动推导得到
      count: state.counter.count,
      message: state.counter.message,
    }),
    shallowEqualApp
  );

  const dispatch = useAppDispatch();
  const changeMessageHandler = () => {
    dispatch(changeMessageAction('Hello Redux Toolkit!'));
  };
  /* dispatch用于在可调用的函数中处理xxxReducer中的Action */

  return (
    <>
      <AppHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      <div>count:{count}</div>
      <div>message:{message}</div>
      <button onClick={changeMessageHandler}>修改message</button>
    </>
  );
}

export default App;
