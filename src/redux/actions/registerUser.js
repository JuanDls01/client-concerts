import axios from "axios";
export const REGISTER_USER = "REGISTER_USER";

const registerUser = (input) => {
  // console.log(input);

  return async (dispatch) => {
    try {
      const json = await axios.post("/auth/register", input);
      //   console.log(json.data)
      return dispatch({
        type: REGISTER_USER,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export default registerUser;
