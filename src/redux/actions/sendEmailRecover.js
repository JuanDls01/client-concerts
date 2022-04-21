import axios from "axios";
export const SEND_EMAIL_RECOVER = 'SEND_EMAIL_RECOVER';


export default function sendEmailRecover(email) {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/sendEmailRecover",email);
      return dispatch({
        type: SEND_EMAIL_RECOVER,
        payload: json.data
      })
    } catch (error) {
      console.log(error);
    }
  }

}