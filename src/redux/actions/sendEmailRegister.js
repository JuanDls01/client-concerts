import axios from "axios";
export const SEND_EMAIL_REGISTER = 'SEND_EMAIL_REGISTER';


export default function sendEmailRegister(data) {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/sendEmailRegister",data);
      return dispatch({
        type: SEND_EMAIL_REGISTER,
        payload: json.data
      })
    } catch (error) {
      console.log(error);
    }
  }

}