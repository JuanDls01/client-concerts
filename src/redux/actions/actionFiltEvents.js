import moment from "moment";
import axios from "axios";
export const FILT_EVENTS = 'FILT_EVENTS';

export default function filtEvents(date) {
    // console.log(date)
    const first = date.start === null ? null : date.start._d
    const second = date.end === null ? null : date.end._d;

    const deta = {
        first: moment(first).format('YYYY-MM-DD'),
        second: moment(second).format('YYYY-MM-DD'),
        genre: date.genre
    }

    console.log(deta, "detaaaa")

    return async function (dispatch) {
        try {
            const json = await axios.get("http://localhost:3001/event/filter", {
                params: deta
            });
            console.log(json.data)
            return dispatch({
                type: FILT_EVENTS,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }

}