import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import UserPanel from "../Common/UserPanel/UserPanel";
import NavBarDash from "../DashboardAdmin/NavBarDash/NavBarDash";
import useRoleProtected from "../Hooks/useRoleProtected";
import NavBar from "../NavBar/NavBar";
import {
    conteiner,
    ContentsubTitleUsers,
    subtileUsers,
} from "./Profile.module.css";

const Profile = () => {
    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const navigate = useNavigate();
    useRoleProtected();
    // console.log(user.Role?.name)
    let usuario = user.Role?.name

    return (
        <div className={conteiner}>
           {usuario === 'User'?<NavBar user={user}/>:<NavBarDash user={user}/>}

            <div className={ContentsubTitleUsers}>
                <h1 className={subtileUsers}>My Profile</h1>
            </div>

            <UserPanel userProp={user} profile />
        </div>
    );
};

export default Profile;