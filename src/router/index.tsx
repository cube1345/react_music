import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import React, { lazy } from 'react';

/* import Download from "@/pages/download";
import Focus from "@/pages/focus";
import Mine from "@/pages/mine";
import Discover from "@/pages/discover"; */

const Download = lazy(() => import('@/pages/download'));
const Focus = lazy(() => import('@/pages/focus'));
const Mine = lazy(() => import('@/pages/discover/child-views/mine'));
const Discover = lazy(() => import('@/pages/discover'));
const Recommend = lazy(() => import('@/pages/discover/child-views/recommend'));
const Album = lazy(() => import('@/pages/discover/child-views/album'));
const Artist = lazy(() => import('@/pages/discover/child-views/artist'));
const Djradio = lazy(() => import('@/pages/discover/child-views/djradio'));
const Ranking = lazy(() => import('@/pages/discover/child-views/ranking'));
const Songs = lazy(() => import('@/pages/discover/child-views/songs'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="discover" />,
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        element: <Recommend />,
      },
      {
        path: '/discover/album',
        element: <Album />,
      },
      {
        path: '/discover/artist',
        element: <Artist />,
      },
      {
        path: '/discover/djradio',
        element: <Djradio />,
      },
      {
        path: '/discover/ranking',
        element: <Ranking />,
      },
      {
        path: '/discover/songs',
        element: <Songs />,
      },
    ],
  },
  {
    path: '/download',
    element: <Download />,
  },
  {
    path: '/focus',
    element: <Focus />,
  },
  {
    path: '/mine',
    element: <Mine />,
  },
];

export default routes;
