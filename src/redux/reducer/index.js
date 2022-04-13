import { GET_EVENTS, GET_EVENT_DETAIL, CLEAN_EVENT_DETAIL } from '../actions/index'

// import { GET_EVENTS } from "../actions/getEvents";
import { FILT_BY_GENRE } from "../actions/filtByGenre";
import { GET_GENRES_TYPES } from "../actions/getGenresTypes";

const initialState = {
  events: [],
  details: [],
  allEvents: [],
  genres: [],
};

const rootReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_EVENTS:
            //const event2 = state.events
            
            return {
                ...state,
                events: action.payload
            }
        
        case GET_EVENT_DETAIL:
            console.log(action.payload)
            return {
                ...state,
                details: action.payload
            }
        
        case CLEAN_EVENT_DETAIL:
            return {
                ...state,
                details: []
            }

        default:
            return state;
    }
}
  switch (action.type) {
    case GET_EVENTS: {
      // console.log(action.payload);
      // return {
      //   ...state,
      //   events: action.payload,
      //   allEvents: action.payload,
      // };
    }
    case GET_GENRES_TYPES: {
      // return {
      //   ...state,
      //   genres: action.payload,
      // };
    }
    case FILT_BY_GENRE: {
      const allEvents = state.allEvents;
      const filterEvents = allEvents.filter((event) => event.artist.genre.name === action.payload);
      console.log(filterEvents)
      // return {
      //   ...state,
      //   events: filterEvents,
      // };
    }
    default:
      // return state;
  }
// };

export default rootReducer;
