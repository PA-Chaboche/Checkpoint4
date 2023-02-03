import { NavLink, useLocation } from "react-router-dom";
import { useCurrentUserContext } from "./Context/CurrentUserContext";

import logo from "../assets/Boo.gif";
import "./NavHeader.css";

const NavHeader = () => {
  const { pathname } = useLocation();
  const { currentUser } = useCurrentUserContext();

  const signinRegex = /^\/signIn/;
  const register = /^\/register/;
  const contact = /^\/contact/;
  const admin = /^\/admin/;
  return (
    <section>
      <div
        className={
          !signinRegex.test(pathname) &&
          !register.test(pathname) &&
          !contact.test(pathname) &&
          !admin.test(pathname)
            ? "NavHeader"
            : "NavHeader signin"
        }
      >
        {!signinRegex.test(pathname) &&
          !register.test(pathname) &&
          !contact.test(pathname) &&
          !admin.test(pathname) && (
            <li>
              <NavLink className="about" to="/about">
                About
              </NavLink>
            </li>
          )}
        <NavLink to="/">
          <img src={logo} alt="chat surn une moto" className="logo" />
        </NavLink>
        {!signinRegex.test(pathname) &&
          !register.test(pathname) &&
          !contact.test(pathname) &&
          !admin.test(pathname) && (
            <li>
              <NavLink className="signin-link" to="/signIn">
                Login
              </NavLink>
            </li>
          )}
      </div>
      <div className="component-url-to-admin">
        {currentUser.rolesId === 2 && (
          <NavLink className="url-to-admin" to="/admin">
            Admin
          </NavLink>
        )}
      </div>
    </section>
  );
};

export default NavHeader;
