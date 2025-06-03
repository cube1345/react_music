import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ChildCPN from '@/pages/discover/child-cpn/discover-nav'
const Discover = () => {
  return (
    <>
      <div>
        <ChildCPN />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Discover;
