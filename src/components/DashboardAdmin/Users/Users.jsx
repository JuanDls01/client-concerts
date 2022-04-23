import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import style from "../DashboardAdmin.module.css"

const Users = () => {
    const [users, setUsers] = useState([]);
    const token = useSelector((state) => state.token);
    let colums = ['name', 'email', 'role', 'status'];

    useEffect(() => {
        grabUserHandler();
    }, []);

    useEffect(() => {
        grabUserHandler();
    }, [token]);

    const grabUserHandler = async () => {
        if(users.length === 0 && token !== '') {
            try {
                const response = await axios.get('http://localhost:3001/auth/users', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUsers(response.data);
            } catch (error) {
                console.log('err', error);
                setUsers({error: error.response.data.message});
            }
        }
    }

    return (
        <>
            <div className={style.ContentsubTitle}>
                <h1 className={style.subtile}>Users</h1>
            </div>

            {/* EN ESTA TABLA SE VA A RENDERIZAR UNA FILA POR CADA EVENTO QUE TENGA EL VENDEDOR */}
            <div className={style.tabla}>
                    <table>
                    <thead className={style.columns}>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {/* AQUI VAN A IR LOS DATOS DE CADA EVENTO  */}
                    <tbody>
                        {!users.error && users.map(u => {
                            return (
                                <tr key={u.id}>
                                    <td>{`${u.firstName} ${u.lastName}`}</td>
                                    <td>{u.email}</td>
                                    <td>{u.Role.name}</td>
                                    <td className='text-success'>Active</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Users;