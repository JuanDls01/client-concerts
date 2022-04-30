import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const useRoleProtected = (role = [], redirect = '/') => {
    const user = useSelector(state => state.user);
    const token = useSelector(state => state.token);
    const navigate = useNavigate();
    const [ cookies, setCookie, removeCookie ] = useCookies(['token']);

    useEffect(() => {
        if (token === '' && !cookies.token) navigate("/login");
        else if(user.Role) {
            if(typeof role === 'string'){
                if (user.Role.name.toLowerCase() !== role.toLowerCase()) navigate(redirect);
            }else{
                let auth = false;
                role.forEach(r => {
                    if (user.Role.name.toLowerCase() === r.toLowerCase()) auth = true;
                });
                //if we passed an empty array, it only checks if user is logged in
                if (role.length === 0) auth = true;
                if(!auth) navigate(redirect);
            }
        }
    }, [token, user]);
};

export default useRoleProtected;