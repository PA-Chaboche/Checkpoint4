import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavHeader from "./components/NavHeader";
import NavFooter from "./components/NavFooter";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

import "./App.css";

function App() {
  const { pathname } = useLocation();

  const signinRegex = /^\/signIn/;
  const register = /^\/register/;
  return (
    <div className="App">
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!signinRegex.test(pathname) && !register.test(pathname) ? (
        <NavFooter />
      ) : null}
    </div>
  );
}

export default App;
