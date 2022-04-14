import { GET_EVENTS } from "../actions/getEvents";
import {  FILT_EVENTS } from "../actions/actionFiltEvents";
import { GET_GENRES } from "../actions/actionGenres";

const initialState = {
    events: [],
    details: [],
    genres:[]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS: {
            return {
                ...state,
                events: action.payload,
            }
        }
        case GET_GENRES: {
            return {
                ...state,
                genres: action.payload,
            }
        }
        case FILT_EVENTS: {
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