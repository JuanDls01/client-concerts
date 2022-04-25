import axios from "axios";
export const GET_GENRES = "GET_GENRES";

export default function getGenres() {
  return async function (dispatch) {
    try {
      const json = await axios.get("/genre");
      return dispatch({
        type: GET_GENRES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
