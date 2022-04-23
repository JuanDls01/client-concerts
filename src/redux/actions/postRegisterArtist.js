import axios from "axios";
export const POST_ARTIST = 'POST_ARTIST';

export default function postArtist(body) {

    return async function (dispatch) {
        try {
            const result = await axios.post("http://localhost:3001/artist",body);
            console.log(result.data.id)
            return dispatch({
                type: POST_ARTIST,
                payload: result.data,
            });
        } catch (error) {
            console.log(error)
        }
    }
}