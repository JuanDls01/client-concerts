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
            console.log(json.data)
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