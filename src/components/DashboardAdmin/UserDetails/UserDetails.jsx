import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
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
  fakeLinkUsers
} from "./UserDetails.module.css";
import UserPanel from "../../Common/UserPanel/UserPanel";

const UserDetails = () => {
  useRoleProtected(["super admin", "admin"]);
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const userLoaded = useSelector((state) => state.userDetail);
  const token = useSelector((state) => state.token);
  const { getUser, clearUser } = actionsCreator;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUser(id, token));
    return () => {
      dispatch(clearUser());
    };
  }, [token]);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      grow: 2,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
      grow: 2
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Time",
      selector: (row) => row.time,
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => row.actions,
      sortable: true,
    }
  ];

  let data = userLoaded.hasOwnProperty('Events') && Object.keys(userLoaded.Events).length > 0 && userLoaded.Events.map(e => {
    return {
        // name: <Link to={`/admin/dashboard/user/${u.id}`} className={headingsColor}><strong>{`${u.firstName} ${u.lastName}`}</strong></Link>,
        name: e.name,
        description: e.description,
        date: e.date,
        time: e.time,
        actions: 'Btns'
    };
  });

  return (
    <div className={conteiner}>
      <NavBarDash user={user} />
      {/* TITLE */}
      <div className={ContentsubTitleUsers}>
        <h1 className={subtileUsers}>
          <AiOutlineArrowLeft onClick={() => navigate(-1)} className={fakeLinkUsers} />
          {` ${userLoaded.firstName} ${userLoaded.lastName}`}
        </h1>
      </div>
      {/* USER INFO */}
      <UserPanel userProp={userLoaded} />

      {/* EVENTS */}
      <div className={ContentsubTitleUsers}>
        <h1 className={subtileUsers}>Events</h1>
      </div>
      {/* EN ESTA TABLA SE VA A RENDERIZAR UNA FILA POR CADA EVENTO QUE TENGA EL VENDEDOR */}
      {
            data && data.length > 0 ?
            <div className={`container ${tablaUsers}`}>
              <DataTable columns={columns} data={data} />
            </div>:
            <div className={`container text-start mb-5 alert alert-danger ${detailCont}`} role="alert">
              There aren't any events...
            </div>
        }
    </div>
  );
};
export default UserDetails;

// {/* <div className="container">
//         <div className={detailCont}>
//           <div className="row no-gutters align-items-center">
//             {/* LEFT */}
//             <div className="col-lg-4 card-body p-4">
//               {/* <p>
//                 <strong className={headingsColor}>Password</strong>
//               </p> */}
//               <form
//               className="text-start"
//                 onSubmit={submitPWHandler}
//               >
//                 {/* CURRENT PASSWORD */}
//                 { user.id === id && 
//                   <div className="form-group">
//                     <label htmlFor="fname" className={headingsColor}>
//                       Current Password
//                     </label>
//                     <input
//                       name="currentPassword"
//                       type="password"
//                       className={`form-control ${inputProf}`}
//                       placeholder="Current Password"
//                       value={inputPW.currentPassword}
//                       onChange={handleChangeInputPW}
//                     />
//                     {inputPWErros.currentPassword ? (
//                       <div className="text-end">
//                         <small className="text-danger">{inputPWErros.currentPassword}</small>
//                       </div>
//                     ) : null}
//                   </div>
//                 }
//                 {/* NEW PASSWORD */}
//                 <div className="form-group">
//                   <label htmlFor="fname" className={headingsColor}>
//                     New Password
//                   </label>
//                   <input
//                     name="password"
//                     type="password"
//                     className={`form-control ${inputProf}`}
//                     placeholder="New Password"
//                     value={inputPW.password}
//                     onChange={handleChangeInputPW}
//                   />
//                   {inputPWErros.password ? (
//                     <div className="text-end">
//                       <small className="text-danger">{inputPWErros.password}</small>
//                     </div>
//                   ) : null}
//                 </div>
//                 {/* CONFIRMED PASSWORD */}
//                 <div className="form-group">
//                   <label htmlFor="fname" className={headingsColor}>
//                     Confirmed Password
//                   </label>
//                   <input
//                     name="confirmPassword"
//                     type="password"
//                     className={`form-control ${inputProf}`}
//                     placeholder="Confirmed Password"
//                     value={inputPW.confirmPassword}
//                     onChange={handleChangeInputPW}
//                   />
//                   {inputPWErros.confirmPassword ? (
//                     <div className="text-end">
//                       <small className="text-danger">{inputPWErros.confirmPassword}</small>
//                     </div>
//                   ) : null}
//                 </div>
//                 <div className="form-group mt-3 text-end">
//                   <a href="#" className="btn btn-warning me-2">Reset Password</a>
//                   <button
//                     className="btn btn-primary"
//                     disabled={
//                       Object.keys(inputPWErros).length > 0 || (inputPW.password === '' && inputPW.confirmPassword === '') ?
//                       true: false
//                     }
//                   >Update</button>
//                 </div>
//               </form>
//             </div>

//             {/* RIGHT */}
//             <form
//               className={`col-lg-8 card-body p-4 text-start ${rightCont}`}
//               onSubmit={submitHandler}
//             >
//               <div className="row">
//                 <div className="col">
//                   <div className="form-group">
//                     <label htmlFor="fname" className={headingsColor}>
//                       First name
//                     </label>
//                     <input
//                       name="firstName"
//                       type="text"
//                       className={`form-control ${inputProf}`}
//                       placeholder="First name"
//                       value={input.firstName}
//                       onChange={handleChangeInput}
//                     />
//                   </div>
//                 </div>
//                 <div className="col">
//                   <div className="form-group">
//                     <label htmlFor="lname" className={headingsColor}>
//                       Last name
//                     </label>
//                     <input
//                       name="lastName"
//                       type="text"
//                       className={`form-control ${inputProf}`}
//                       placeholder="Last name"
//                       value={input.lastName}
//                       onChange={handleChangeInput}
//                     />
//                   </div>
//                 </div>
//                 {inputErros.firstName ? (
//                   <div className="text-end">
//                     <small className="text-danger">
//                       {inputErros.firstName}
//                     </small>
//                   </div>
//                 ) : null}
//                 {inputErros.lastName ? (
//                   <div className="text-end">
//                     <small className="text-danger">{inputErros.lastName}</small>
//                   </div>
//                 ) : null}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="fname" className={headingsColor}>
//                   Email
//                 </label>
//                 <input
//                   name="email"
//                   type="email"
//                   className={`form-control ${inputProf}`}
//                   placeholder="Email"
//                   value={input.email}
//                   onChange={handleChangeInput}
//                 />
//                 {inputErros.email ? (
//                   <div className="text-end">
//                     <small className="text-danger">{inputErros.email}</small>
//                   </div>
//                 ) : null}
//               </div>

//               <div className="row">
//                 <div className="col">
//                   <div className="form-group">
//                     <label htmlFor="phone" className={headingsColor}>
//                       Phone
//                     </label>
//                     <input
//                       name="phone"
//                       type="text"
//                       className={`form-control ${inputProf}`}
//                       placeholder="Phone"
//                       value={input.phone}
//                       onChange={handleChangeInput}
//                     />
//                   </div>
//                 </div>
//                 <div className="col">
//                   <div className="form-group">
//                     <label htmlFor="role" className={headingsColor}>
//                       Role
//                     </label>
//                     <br />
//                     <select
//                       name="role"
//                       className="form-select"
//                       value={input.role}
//                       onChange={handleChangeInput}
//                     >
//                       {Object.keys(roles).length > 0 &&
//                         input.role &&
//                         roles.map((r) => {
//                           const option = (
//                             <option key={r.id} value={r.id}>
//                               {r.name}
//                             </option>
//                           );
//                           if (r.name !== "Super admin") return option;
//                         })}
//                     </select>
//                   </div>
//                 </div>
//                 {inputErros.phone ? (
//                   <div className="text-end">
//                     <small className="text-danger">{inputErros.phone}</small>
//                   </div>
//                 ) : null}
//               </div>
//               <div className="form-group mt-3 text-end">
//                 <button className="btn btn-primary" disabled={Object.keys(inputErros).length > 0 ? true : false}>Update</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div> */}
