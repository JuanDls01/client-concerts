import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import actionsCreator from "../../../redux/actions";
import {
    ContentsubTitleUsers,
    subtileUsers,
    tablaUsers,
    detailCont,
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

    const columns = [
        {
          name: "Name",
          selector: (row) => row.name,
          sortable: true,
          grow: 2,
        },
        {
          name: "Email",
          selector: (row) => row.email,
          sortable: true,
          grow: 2
        },
        {
          name: "Role",
          selector: (row) => row.role,
          sortable: true,
        },
        {
          name: "Status",
          selector: (row) => row.status,
          sortable: true,
        },
        {
          name: "Actions",
          selector: (row) => row.actions,
          sortable: true,
        }
    ];
    
    let data = !users.hasOwnProperty('error') && Object.keys(users).length > 0 && users.map(u => {
        return {
            name: <Link to={`/admin/dashboard/user/${u.id}`} className={headingsColor}><strong>{`${u.firstName} ${u.lastName}`}</strong></Link>,
            email: u.email,
            role: u.Role.name,
            status: 'Active',
            actions: 'btns'
        };
    });
    if(data) data = data.filter(d => d.role !== 'Super admin');


    return (
        <>
            <div className={ContentsubTitleUsers}>
                <h1 className={subtileUsers}>Users</h1>
            </div>

            {/* EN ESTA TABLA SE VA A RENDERIZAR UNA FILA POR CADA EVENTO QUE TENGA EL VENDEDOR */}
            {
                data && data.length > 0 ?
                <div className={`container ${tablaUsers}`}>
                    <DataTable columns={columns} data={data} />
                </div>:
                <div className={`container text-start mb-5 alert alert-danger ${detailCont}`} role="alert">
                    There aren't any users...
                </div>
            }
        </>
    );
};

export default Users;