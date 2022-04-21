import axios from "axios";

export const GET_STAGES = "GET_STAGES";

const getStages = () => {
  return async (dispatch) => {
    try {
      const stage = await axios.get("http://localhost:3001/stage");
      return dispatch({
        type: GET_STAGES,
        payload: stage.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default getStages;
