import { actions } from '../actions/index';
console.log(actions)

const { 
  GET_EVENTS,
  GET_EVENT_DETAIL,
  CLEAN_EVENT_DETAIL, 
  FILT_EVENTS,
  GET_GENRES
} = actions;

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
      };
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
