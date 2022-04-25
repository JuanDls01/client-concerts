import axios from "axios";
export const UPDATE_USER = 'UPDATE_USER';

const updateUser = (input, id, token) => {
    // console.log(input);
    
      return async dispatch => {
         try {
            const json = await axios.post(`http://localhost:3001/users/user/update/${id}`, input, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              }
            });
            let result = json.data;
            delete json.data.password;
            delete json.data.RoleId;
            return dispatch({
                type:UPDATE_USER,
                payload:json.data
            });   
         } catch (error) {
           console.error(error)
         }
      }
  
}

export default updateUser;