import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import NavBarDash from "../NavBarDash/NavBarDash";
import actionsCreator from "../../../redux/actions";
import { AiOutlineArrowLeft } from "react-icons/ai";
import useApiReq from "../../Hooks/useApiReq";
import useRoleProtected from "../../Hooks/useRoleProtected";

import {
  ContentsubTitleUsers,
  subtileUsers,
  conteiner,
  detailCont,
  rightCont,
  headingsColor,
  inputProf,
  tablaUsers,
  columnsUsers,
  rowsUsers,
} from "./UserDetails.module.css";

const UserDetails = () => {
  useRoleProtected(["super admin", "admin"]);
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const userUpdareErr = useSelector((state) => state.userUpdareErr);
  const userLoaded = useSelector((state) => state.userDetail);
  const token = useSelector((state) => state.token);
  const { getUser, clearUser, updateUser, clearUpdateErr, updatePassword } = actionsCreator;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [roles, setRoles] = useState({});
  useApiReq("/users/roles", roles, setRoles);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "",
  });
  const [inputErros, setInputErros] = useState({});
  const [inputPW, setInputPW] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: ""
  });
  const [inputPWErros, setInputPWErros] = useState({});

  useEffect(() => {
    dispatch(getUser(id, token));
    return () => {
      dispatch(clearUser());
    };
  }, [token]);

  useEffect(() => {
    setInput({
      firstName: userLoaded.firstName,
      lastName: userLoaded.lastName,
      phone: userLoaded.phone,
      email: userLoaded.email,
      role: userLoaded.Role ? userLoaded.Role.id : "",
    });
  }, [userLoaded]);

  useEffect(() => {
    return () => {
      dispatch(clearUpdateErr());
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(input, id, token));
  };

  const submitPWHandler = (e) => {
    e.preventDefault();
    // console.log(inputPW);
    dispatch(updatePassword(inputPW, id, token));
    setInputPW({
      currentPassword: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChangeInput = (e) => {
    const result = validator({ ...input, [e.target.name]: e.target.value });
    setInput({ ...input, [e.target.name]: e.target.value });
    setInputErros(result);
  };

  const handleChangeInputPW = (e) => {
    const result = validatorPW({ ...inputPW, [e.target.name]: e.target.value });
    setInputPW({ ...inputPW, [e.target.name]: e.target.value });
    setInputPWErros(result);
  };

  const validator = (input) => {
    let errors = {};
    if (!input.firstName) errors.firstName = "El nombre es requerido";
    else if (input.firstName.length < 2)
      errors.firstName = "El nombre debe contener 2 caracteres minimo";
    else if (input.firstName.length > 23)
      errors.firstName = "El nombre debe contener 23 caracteres maximo";
    else if (input.firstName.match(/^[a-zA-Z ,.'-]+$/) === null)
      errors.firstName = "El nombre solo puede contener letras";
    if (!input.lastName) errors.lastName = "El apellido es requerido";
    else if (input.lastName.length < 2)
      errors.lastName = "El apellido debe contener 2 caracteres minimo";
    else if (input.lastName.length > 23)
      errors.lastName = "El apellido debe contener 23 caracteres maximo";
    else if (input.lastName.match(/^[a-zA-Z ,.'-]+$/) === null)
      errors.lastName = "El apellido solo puede contener letras";
    if (!input.phone) errors.phone = "El telefono es requerido";
    else if (input.phone.length < 8)
      errors.phone = "El telefono debe contener 8 digitos minimo";
    else if (input.phone.length > 15)
      errors.phone = "El telefono debe contener 15 digitos maximo";
    if (!input.email) errors.email = "El correo es requerido";
    return errors;
  };

  const validatorPW = (input) => {
    let errors = {};
    if(!input.currentPassword && user.id === id) errors.currentPassword = "The current password is required";
    if (!input.password) errors.password = "The Password is required";
    else if (input.password.length < 8)
      errors.password = "The password must contain at least 8 characters";
    else if (input.password.length > 20)
      errors.password = "The password must contain at most 20 characters";
    if (!input.confirmPassword)
      errors.confirmPassword = "The password must be confirmed";
    else if (input.password !== input.confirmPassword)
      errors.confirmPassword = "The passwords do not match";
    return errors;
  };

  return (
    <div className={conteiner}>
      <NavBarDash user={user} />
      {/* TITLE */}
      <div className={ContentsubTitleUsers}>
        <h1 className={subtileUsers}>
          <AiOutlineArrowLeft onClick={() => navigate(-1)} />
          {` ${userLoaded.firstName} ${userLoaded.lastName}`}
        </h1>
      </div>
      {/* DETAILS */}
      <div className="container">
        <div className={detailCont}>
          <div className="row no-gutters align-items-center">
            {/* LEFT */}
            <div className="col-lg-4 card-body p-4">
              {/* <p>
                <strong className={headingsColor}>Password</strong>
              </p> */}
              <form
              className="text-start"
                onSubmit={submitPWHandler}
              >
                {/* CURRENT PASSWORD */}
                { user.id === id && 
                  <div className="form-group">
                    <label htmlFor="fname" className={headingsColor}>
                      Current Password
                    </label>
                    <input
                      name="currentPassword"
                      type="password"
                      className={`form-control ${inputProf}`}
                      placeholder="Current Password"
                      value={inputPW.currentPassword}
                      onChange={handleChangeInputPW}
                    />
                    {inputPWErros.currentPassword ? (
                      <div className="text-end">
                        <small className="text-danger">{inputPWErros.currentPassword}</small>
                      </div>
                    ) : null}
                  </div>
                }
                {/* NEW PASSWORD */}
                <div className="form-group">
                  <label htmlFor="fname" className={headingsColor}>
                    New Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className={`form-control ${inputProf}`}
                    placeholder="New Password"
                    value={inputPW.password}
                    onChange={handleChangeInputPW}
                  />
                  {inputPWErros.password ? (
                    <div className="text-end">
                      <small className="text-danger">{inputPWErros.password}</small>
                    </div>
                  ) : null}
                </div>
                {/* CONFIRMED PASSWORD */}
                <div className="form-group">
                  <label htmlFor="fname" className={headingsColor}>
                    Confirmed Password
                  </label>
                  <input
                    name="confirmPassword"
                    type="password"
                    className={`form-control ${inputProf}`}
                    placeholder="Confirmed Password"
                    value={inputPW.confirmPassword}
                    onChange={handleChangeInputPW}
                  />
                  {inputPWErros.confirmPassword ? (
                    <div className="text-end">
                      <small className="text-danger">{inputPWErros.confirmPassword}</small>
                    </div>
                  ) : null}
                </div>
                <div className="form-group mt-3 text-end">
                  <a href="#" className="btn btn-warning me-2">Reset Password</a>
                  <button
                    className="btn btn-primary"
                    disabled={
                      Object.keys(inputPWErros).length > 0 || (inputPW.password === '' && inputPW.confirmPassword === '') ?
                      true: false
                    }
                  >Update</button>
                </div>
              </form>
            </div>

            {/* RIGHT */}
            <form
              className={`col-lg-8 card-body p-4 text-start ${rightCont}`}
              onSubmit={submitHandler}
            >
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="fname" className={headingsColor}>
                      First name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      className={`form-control ${inputProf}`}
                      placeholder="First name"
                      value={input.firstName}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="lname" className={headingsColor}>
                      Last name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      className={`form-control ${inputProf}`}
                      placeholder="Last name"
                      value={input.lastName}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                {inputErros.firstName ? (
                  <div className="text-end">
                    <small className="text-danger">
                      {inputErros.firstName}
                    </small>
                  </div>
                ) : null}
                {inputErros.lastName ? (
                  <div className="text-end">
                    <small className="text-danger">{inputErros.lastName}</small>
                  </div>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="fname" className={headingsColor}>
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className={`form-control ${inputProf}`}
                  placeholder="Email"
                  value={input.email}
                  onChange={handleChangeInput}
                />
                {inputErros.email ? (
                  <div className="text-end">
                    <small className="text-danger">{inputErros.email}</small>
                  </div>
                ) : null}
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="phone" className={headingsColor}>
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="text"
                      className={`form-control ${inputProf}`}
                      placeholder="Phone"
                      value={input.phone}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="role" className={headingsColor}>
                      Role
                    </label>
                    <br />
                    <select
                      name="role"
                      className="form-select"
                      value={input.role}
                      onChange={handleChangeInput}
                    >
                      {Object.keys(roles).length > 0 &&
                        input.role &&
                        roles.map((r) => {
                          const option = (
                            <option key={r.id} value={r.id}>
                              {r.name}
                            </option>
                          );
                          if (r.name !== "Super admin") return option;
                        })}
                    </select>
                  </div>
                </div>
                {inputErros.phone ? (
                  <div className="text-end">
                    <small className="text-danger">{inputErros.phone}</small>
                  </div>
                ) : null}
              </div>
              <div className="form-group mt-3 text-end">
                <button className="btn btn-primary" disabled={Object.keys(inputErros).length > 0 ? true : false}>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* EVENTS */}
      <div className={ContentsubTitleUsers}>
        <h1 className={subtileUsers}>Events</h1>
      </div>
      {/* EN ESTA TABLA SE VA A RENDERIZAR UNA FILA POR CADA EVENTO QUE TENGA EL VENDEDOR */}
      <div className={tablaUsers}>
        <table>
          <thead className={columnsUsers}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Control</th>
            </tr>
          </thead>
          {/* AQUI VAN A IR LOS DATOS DE CADA EVENTO  */}
          <tbody>
            <tr className={rowsUsers}>
              <td>
                <strong>Rock Concert</strong>
              </td>
              <td>email</td>
              <td>role</td>
              <td className="text-success">Active</td>
              <td>btns</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserDetails;
