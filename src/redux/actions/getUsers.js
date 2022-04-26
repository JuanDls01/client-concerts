import axios from "axios";
export const GET_USERS = "GET_USERS";

const getUsers = (token) => {
  return async (dispatch) => {
    try {
      const json = await axios.get("/users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(json.data)
      return dispatch({
        type: GET_USERS,
        payload: json.data,
      });
    } catch (err) {
      console.log("getUSers reducer", err);
    }
  };
};

export default getUsers;
