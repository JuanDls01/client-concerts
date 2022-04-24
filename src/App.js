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
import ForgetPassword from "../src/components/ForgetPassword/ForgetPassword"
import "./App.css";

import DashboardSeller from "./components/DashboardSeller/DashboardSeller";
import DashboardAdmin from "./components/DashboardAdmin/DashboardAdmin";

import OrderForm from "./components/OrderForm/OrderForm";

import "./App.css";

import actionsCreator from "./redux/actions";
import UserDetails from "./components/DashboardAdmin/UserDetails/UserDetails";

function App() {
  const dispatch = useDispatch();
  const tokenError = useSelector((state) => state.tokenError);
  const { loginToken, logout } = actionsCreator;
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if (cookies.token) dispatch(loginToken({ bodyToken: cookies.token }));
  }, []);

  useEffect(() => {
    if (tokenError) {
      removeCookie('token', { path: '/' });
      dispatch(logout());
    }
  }, [tokenError]);

  return (
    <div className="App">
      <Routes>
        {/* Invitado: */}
        <Route index element={<Home />} />
        <Route path="/recoverPassword" exact element={<ForgetPassword />} />
        <Route path="/register" exact element={<RegisterForm />} />
        <Route path="/register/success" element={<RegisterSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/:id" element={<EventDetail />} />
        {/* ADMIN */}
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/dashboard/user/:id" element={<UserDetails />} />
        {/* Vendedor: */}
        <Route path="/postartist" element={<ArtistForm />} />
        <Route path="/createEvent" element={<EventForm />} />
        {/* Cliente: */}
        {/* Cambiarle al path que corresponda */}
        <Route path="/HomeRegisteredUser" element={<HomeRegUser />} />

        <Route path="/user/dashboard" element={<DashboardSeller />} />

        <Route path="/order" element={<OrderForm />} />

      </Routes>
    </div>
  );
}

export default App;
