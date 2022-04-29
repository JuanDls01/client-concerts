import axios from "axios";
export const LOGIN_TOKEN = "LOGIN_TOKEN";

const loginToken = (token) => {
  return async (dispatch) => {
    try {
      const json = await axios.post("/auth/login/token", token, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.bodyToken}`,
        },
      });
      // console.log(json.data)
      return dispatch({
        type: LOGIN_TOKEN,
        payload: json.data,
      });
    } catch (err) {
      console.log("logintoken", err);
    }
  };
};

export default loginToken;
