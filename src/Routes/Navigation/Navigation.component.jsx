import { React, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropDown from "../../Components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../assets/007 crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { SignOutUser } from "../../utils/Firebase.utils/Firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // const SignOutHandle = async () => {
  //   await SignOutUser
  //   setCurrentUser(null)
  // }

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={SignOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
