import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import actionsCreator from "../../../redux/actions";
import {
    ContentsubTitleUsers,
    subtileUsers,
    tablaUsers,
    columnsUsers,
    fakeLinkUsers,
    rowsUsers,
    headingsColor
} from './Users.module.css';


const Users = () => {
    const users = useSelector((state) => state.usersList);
    const token = useSelector((state) => state.token);
    const { getUsers } = actionsCreator;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers(token));
    }, [token]);


    return (
        <>
            <div className={ContentsubTitleUsers}>
                <h1 className={subtileUsers}>Users</h1>
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
                        {!users.hasOwnProperty('error') && Object.keys(users).length > 0 && users.map(u => {
                            if(u.Role.name !== 'Super admin'){
                                return (
                                    <tr key={u.id} className={rowsUsers}>
                                        <td>
                                            <Link to={`/admin/dashboard/user/${u.id}`} className={headingsColor}><strong>{`${u.firstName} ${u.lastName}`}</strong></Link>
                                        </td>
                                        <td>{u.email}</td>
                                        <td>{u.Role.name}</td>
                                        <td className='text-success'>Active</td>
                                        <td>btns</td>
                                    </tr>
                                );
                        }
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Users;