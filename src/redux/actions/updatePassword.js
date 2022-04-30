import axios from "axios";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";

const updatePassword = (input, id, token) => {
  // console.log(input);
  return async (dispatch) => {
    try {
      const json = await axios.post(`/users/password/update/${id}`, input, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      let result = json.data;
      delete json.data.password;
      delete json.data.RoleId;
      return dispatch({
        type: UPDATE_PASSWORD,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export default updatePassword;
