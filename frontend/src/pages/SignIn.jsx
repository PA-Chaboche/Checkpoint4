import { NavLink } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="SignIn-page">
      <div className="component-signin">
        <span className="title-signin">Sign in</span>
        <div>
          <span>email :</span>
          <input type="email" />
        </div>
        <div>
          <span>password :</span>
          <input type="password" />
        </div>
        <div>
          <input type="submit" className="button-signin" />
        </div>
        <p>
          You don't have a account ?
          <NavLink to="/register" className="url-register">
            Click her
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
