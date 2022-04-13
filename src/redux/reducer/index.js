import actions from '../actions/index';

const { 
  GET_EVENTS,
  GET_EVENT_DETAIL,
  CLEAN_EVENT_DETAIL, 
  FILT_BY_GENRE, 
  GET_GENRES_TYPES 
} = actions;

const initialState = {
  events: [],
  details: [],
  allEvents: [],
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

    case GET_GENRES_TYPES: {
      return {
        ...state,
        genres: action.payload,
      };
    }

    case FILT_BY_GENRE: {
      const allEvents = state.allEvents;
      const filterEvents = allEvents.filter((event) => event.artist.genre.name === action.payload);
      console.log(filterEvents)
      return {
        ...state,
        events: filterEvents,
      };
    }

    case GET_EVENT_DETAIL: {
      console.log(action.payload)
      return {
          ...state,
          details: action.payload
      }
    }

    case CLEAN_EVENT_DETAIL:{
      return {
          ...state,
          details: []
      }
    }

    default:
      return state;
  }
};

export default rootReducer;
