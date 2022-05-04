import axios from "axios";
export const SEND_EMAIL_BUY = "SEND_EMAIL_BUY";

export default function sendEmailBuy(email) {
  return async function (dispatch) {
    try {
      const json = await axios.post("/sendEmailBought", { email });
      return dispatch({
        type: SEND_EMAIL_BUY,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}