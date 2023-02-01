import { NavLink, useLocation } from "react-router-dom";

import logo from "../assets/chatmoto.jpg";
import "./NavHeader.css";

const NavHeader = () => {
  const { pathname } = useLocation();

  const signinRegex = /^\/signIn/;
  const register = /^\/register/;
  return (
    <div
      className={
        !signinRegex.test(pathname) && !register.test(pathname)
          ? "NavHeader"
          : "NavHeader signin"
      }
    >
      {!signinRegex.test(pathname) && !register.test(pathname) && (
        <li>
          <NavLink className="about" to="/about">
            About
          </NavLink>
        </li>
      )}
      <NavLink to="/">
        <img src={logo} alt="chat surn une moto" className="logo" />
      </NavLink>
      {!signinRegex.test(pathname) && !register.test(pathname) && (
        <li>
          <NavLink className="signin" to="/signIn">
            Sign in
          </NavLink>
        </li>
      )}
    </div>
  );
};

export default NavHeader;
