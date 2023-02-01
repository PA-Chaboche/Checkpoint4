import { NavLink } from "react-router-dom";

import "./Register.css";

const Register = () => {
  return (
    <div className="SignIn-page">
      <span>Register</span>
      <div>
        <span>name :</span>
        <input type="text" />
      </div>
      <div>
        <span>email :</span>
        <input type="email" />
      </div>
      <div>
        <span>password :</span>
        <input type="password" />
      </div>
      <div>
        <input type="submit" />
      </div>
      <p>
        Do you have a account ?
        <NavLink to="/signin" className="url-register">
          Click her
        </NavLink>
      </p>
    </div>
  );
};

export default Register;
