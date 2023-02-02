import axios from "axios";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../components/Context/CurrentUserContext";

import "./Register.css";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const { setCurrentUser } = useCurrentUserContext();
  const navigate = useNavigate();

  const onSubmits = (e) => {
    if (!e.email || !e.password || !e.firstname) {
      console.warn("You must provide an email, username and password !");
    } else {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/users`, e)
        .then(({ data }) => {
          setCurrentUser(data);
          navigate("/signIn");
        })
        .catch((err) => {
          console.error(err);
          console.error("Invalid !");
        });
    }
  };

  return (
    <div className="register-page">
      <form className="component-register" onSubmit={handleSubmit(onSubmits)}>
        <span className="title-register">Register</span>
        <div className="component-name-register">
          <span>name :</span>
          <input type="text" {...register("firstname")} required />
        </div>
        <div className="component-email-register">
          <span>email :</span>
          <input
            type="email"
            {...register("email")}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
        </div>
        <div className="component-email-register">
          <span>password :</span>
          <input type="password" {...register("password")} required />
        </div>
        <div className="component-button-register">
          <input type="submit" />
        </div>
        <p className="register-url-component">
          Do you have a account ?
          <NavLink to="/signIn" className="url-register">
            Click her
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
