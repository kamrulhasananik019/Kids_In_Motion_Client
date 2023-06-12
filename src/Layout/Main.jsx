import React from 'react';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {



  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    <Footer></Footer>
    </div>
  );
};

export default Main;