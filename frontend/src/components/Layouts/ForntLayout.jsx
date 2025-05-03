import { Outlet } from 'react-router-dom';
import HeaderServer from '../Header/HeaderServer';
import React from 'react';

const ForntLayout = () => {
  return (
    <main>
      <HeaderServer />
      <div>
        <div className="w-full h-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default ForntLayout;
