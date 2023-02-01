import { NavLink } from "react-router-dom";

import "./NavFooter.css";

const NavFooter = () => {
  return (
    <div className="NavFooter">
      <ul>
        <li>
          <NavLink className="projects" to="/projects">
            Projects
          </NavLink>
        </li>
      </ul>
      <ul>
        <p className="copyright">©copyright</p>
      </ul>
      <ul>
        <li>
          <NavLink className="contact" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavFooter;
