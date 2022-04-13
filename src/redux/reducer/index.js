import { GET_EVENTS } from "../actions/getEvents";
import { FILT_BY_DATE } from "../actions/actionFiltByDate";

const initialState = {
    events: [],
    details: [],
    filter:{
        date:[],
        genre:""
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS: {
            console.log(action.payload);
            return {
                ...state,
                events: action.payload,
            }
        }
        case FILT_BY_DATE: {
            return {
                ...state,
                events: action.payload,
            };
        }
        default:
          return state;
      }
}

export default rootReducer;