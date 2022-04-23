import React from 'react';
import style from '../DashboardAdmin.module.css'

const Tab = ({title, data}) => {
    return (<>
        <div className={style.ContentsubTitle}>
            <h1 className={style.subtile}>{title}</h1>
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
                    {data.map(u => {
                        return (
                            <tr>
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
      </>);
}

export default Tab;