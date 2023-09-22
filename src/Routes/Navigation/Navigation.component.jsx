import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo} from '../../assets/007 crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo  className="logo"/>
        </Link>
        <div className="nav-links-container">
          <div className="nav-link">
            <Link to="/shop">Shop</Link>
          </div>
          <div className="nav-link">
            <Link to="/sign-in">Sign In</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
