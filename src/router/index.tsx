import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import React, { lazy } from "react";


/* import Download from "@/pages/download";
import Focus from "@/pages/focus";
import Mine from "@/pages/mine";
import Discover from "@/pages/discover"; */

const Download = lazy(() => import('@/pages/download'));
const Focus = lazy(() => import('@/pages/focus'));
const Mine = lazy(() => import('@/pages/mine'));
const Discover = lazy(() => import('@/pages/discover'));


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/discover'/>
  },
  {
    path:'/discover',
    element:<Discover />,
    children: [
      {
        path: '',
      }
    ]
  },
  {
    path:'/download',
    element:<Download />
  },
  {
    path: '/focus',
    element:<Focus />
  },
  {
    path: '/mine',
    element:<Mine />
  }
];


export default routes;

