import React from 'react';
import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
const Discover = () => {
  return (
    <>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/album">新碟上架</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/djradio">主播电台</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Discover;
