import axios from "axios";

export const GET_ARTISTS = "GET_ARTISTS";

const getArtists = () => {
  return async (dispatch) => {
    try {
      const artists = await axios.get("/artist");
      return dispatch({
        type: GET_ARTISTS,
        payload: artists.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default getArtists;
