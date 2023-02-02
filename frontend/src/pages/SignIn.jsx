import axios from "axios";
import { useForm } from "react-hook-form";

import { NavLink, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../components/Context/CurrentUserContext";
import "./SignIn.css";

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const { setCurrentUser } = useCurrentUserContext();
  const navigate = useNavigate();

  const onSubmits = (e) => {
    if (!e.email || !e.password) {
      console.warn("You must provide an email and password !");
    } else {
      console.warn(e);
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/users/signIn`, e)
        .then(({ data }) => {
          setCurrentUser(data);
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
          console.error("Invalid password or email !");
        });
    }
  };

  return (
    <div className="SignIn-page">
      <form className="component-signin" onSubmit={handleSubmit(onSubmits)}>
        <span className="title-signin">Sign in</span>
        <div className="signin-email">
          <span>email :</span>
          <input
            type="email"
            {...register("email")}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
        </div>
        <div className="signin-password">
          <span>password :</span>
          <input type="password" {...register("password")} required />
        </div>
        <div>
          <input type="submit" className="button-signin" />
        </div>
        <p className="url-register-component">
          You don't have a account ?
          <NavLink to="/register" className="url-register">
            Click her
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
