import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavHeader from "./components/NavHeader";
import NavFooter from "./components/NavFooter";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import About from "./pages/About";
import Admin from "./pages/Admin";

import "./App.css";

function App() {
  const { pathname } = useLocation();

  const signinRegex = /^\/signIn/;
  const register = /^\/register/;
  const contact = /^\/contact/;
  const admin = /^\/admin/;
  return (
    <div className="App">
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {!signinRegex.test(pathname) &&
      !register.test(pathname) &&
      !contact.test(pathname) &&
      !admin.test(pathname) ? (
        <NavFooter />
      ) : null}
    </div>
  );
}

export default App;
