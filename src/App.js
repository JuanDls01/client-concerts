import React, { useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import RegisterForm from "./components/registerForm/RegisterForm";
import RegisterSuccess from "./components/registerForm/RegisterSuccess/RegisterSuccess";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import EventDetail from "./components/EventDetail/EventDetail";
import ArtistForm from "./components/registerArtist/RegisterArtist";
import EventForm from "./components/EventForm/EventForm";
import HomeRegUser from "./components/HomeRegUser/HomeRegUser";
import "./App.css";

import actionsCreator from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const authError = useSelector((state) => state.authError);
  const { loginToken, logout } = actionsCreator;
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if (authError) {
      if (authError.includes("logout")) {
        removeCookie("token");
        dispatch(logout);
      }
    } else if (cookies.token)
      dispatch(loginToken({ bodyToken: cookies.token }));
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* Invitado: */}
        <Route index element={<Home />} />
        <Route path="/register" exact element={<RegisterForm />} />
        <Route path="/register/success" element={<RegisterSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/:id" element={<EventDetail />} />
        {/* Vendedor: */}
        <Route path="/postartist" element={<ArtistForm />} />
        <Route path="/createEvent" element={<EventForm />} />
        {/* Cliente: */}
        {/* Cambiarle al path que corresponda */}
        <Route path="/HomeRegisteredUser" element={<HomeRegUser />} />
      </Routes>
    </div>
  );
}

export default App;
