import { GET_EVENTS } from "../actions/getEvents";
import { FILT_BY_GENRE } from "../actions/filtByGenre";
import { GET_GENRES_TYPES } from "../actions/getGenresTypes";

const initialState = {
  events: [],
  details: [],
  genres: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS: {
      console.log(action.payload);
      return {
        ...state,
        events: action.payload,
        allEvents: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
