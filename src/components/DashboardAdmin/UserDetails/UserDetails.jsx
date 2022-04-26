import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
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
  const { getUser, clearUser, updateUser, clearUpdateErr } = actionsCreator;
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

  const handleChangeInput = (e) => {
    const result = validator({ ...input, [e.target.name]: e.target.value });
    setInput({ ...input, [e.target.name]: e.target.value });
    setInputErros(result);
    // dispatch(clearAuthError());
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
    if (!input.password) errors.password = "La contraseña es requerido";
    else if (input.password.length < 8)
      errors.password = "La contraseña debe contener 8 digitos minimo";
    else if (input.password.length > 20)
      errors.password = "La contraseña debe contener 20 digitos maximo";
    if (!input.confirmPassword)
      errors.confirmPassword = "La contraseña debe ser confirmada";
    else if (input.password !== input.confirmPassword)
      errors.confirmPassword = "Las contraseñas no coinciden";
    if (!input.email) errors.email = "El correo es requerido";
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
          <div className="row no-gutters">
            {/* LEFT */}
            <div className="col-lg-4 card-body p-4">
              <p>
                <strong className={headingsColor}>Account</strong>
              </p>
              <p className="text-muted mb-0">
                Set your account type &amp; details.
              </p>
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
              {false ? (
                <div className="text-end">
                  <small className="text-danger">{false}</small>
                </div>
              ) : null}
              {userUpdareErr === "success" ? (
                <div className="text-end">
                  <small className="text-success">User updated!!</small>
                </div>
              ) : null}
              <div className="form-group mt-3 text-end">
                <a href="#" className="btn btn-warning me-2">
                  Reset Password
                </a>
                <button className="btn btn-primary">Update</button>
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
