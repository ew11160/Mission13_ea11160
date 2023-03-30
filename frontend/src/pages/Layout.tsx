import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

// installed react router: npm install react-router-dom

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
