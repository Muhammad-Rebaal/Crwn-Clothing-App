import React from "react";
import Directory from "../../directory/directory-component";
import {Outlet} from 'react-router-dom'

const Home = () => {
  
  return (
    <>
     <Directory  />
     <Outlet />
    </>
  );
};

export default Home


