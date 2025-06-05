import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/index.tsx';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import recommendReducer from '@/pages/discover/child-views/recommend/store/recommend.ts';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    reducer: recommendReducer,
  },
});

/* 以下是获取Store里面的变量的类型 */
/* 首先，可以直接使用StateType={name：string，age：num} 这种方法*/
/* 这个方法的弊端在于每一次新增store的内容时，都要手动添加新的类型 */
/* 以下这个方法可以自动获取类型 */
export type GetStateFnType = typeof store.getState; /* 先获取函数的类型 */
export type IRootState =
  ReturnType<GetStateFnType>; /* 再获取函数返回值的类型，<>填函数的类型的变量 */
export type DispatchType = typeof store.dispatch; /* 获取dispatch的类型 */
/* 这里是第三种方法，就是用TypeTypedUseSelectorHook把IRootState这个设置好的类型
给useAppSelector，这样后续使用useAppSelector，就默认使用了这个IRootState类型 */
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

/* 同上，导出自定义的dispatch */
export const useAppDispatch: () => DispatchType = useDispatch;

/* shallowEqual也是同理，但是意义不大 */
export const shallowEqualApp = shallowEqual;

export default store;
