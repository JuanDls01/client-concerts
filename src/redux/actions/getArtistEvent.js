import axios from "axios";

export const GET_ARTIST_EVENT = 'GAME_ARTIST_EVENT'

const getArtistEvent = (artist) => {
    return async (dispatch) => {
        try {
            const event = await axios.get('http://localhost:3001/event?artist=' + artist);
            return dispatch({
                type: 'GAME_ARTIST_EVENT',
                payload: event.data
            })
        }
        catch (error) {
            alert('No existen eventos!!!')
        }
    }
};

export default getArtistEvent;