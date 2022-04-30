import axios from "axios";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

const updateProfile = (input, id, token) => {
  // console.log(input);

  return async (dispatch) => {
    try {
      const json = await axios.post(`/users/user/update/${id}`, input, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      let result = json.data;
      delete json.data.password;
      delete json.data.RoleId;
      return dispatch({
        type: UPDATE_PROFILE,
        payload: json.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export default updateProfile;
