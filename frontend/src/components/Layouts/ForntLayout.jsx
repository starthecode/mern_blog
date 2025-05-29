import { Outlet } from 'react-router-dom';
import HeaderServer from '../Header/HeaderServer';
import React from 'react';
import Footer from '../Footer';
import FooterCta from '../FooterCta';

const ForntLayout = () => {
  return (
    <main>
      <div className="w-full h-full">
        <HeaderServer />
        <Outlet />
        <FooterCta />
        <Footer />
      </div>
    </main>
  );
};

export default ForntLayout;
