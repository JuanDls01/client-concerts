import { actions } from '../actions/index';
import Swal from 'sweetalert2';

const { 
  GET_EVENTS,
  GET_EVENT_DETAIL,
  CLEAN_EVENT_DETAIL, 
  FILT_EVENTS,
  GET_GENRES,
  GET_NAME_EVENT,
  REGISTER_USER
} = actions;

const initialState = {
  events: [],
  searchevents: [],
  details: [],
  genres: [],
  messagge: '',
  user: {},
  token: '',
  authError: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_EVENTS: {
      return {
        ...state,
        events: action.payload,
        searchevents: action.payload
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
      return {
          ...state,
          details: action.payload
      }
    }

    case CLEAN_EVENT_DETAIL: {
      return {
          ...state,
          details: []
      }
    }

    case GET_NAME_EVENT: {
      const eventfinds = action.payload;
      const notfound = () => {
        document.getElementById('nameEvent').focus()
        Swal.fire({ title: 'Información', 
                    text: 'No se encontraron eventos!!!', 
                    icon: 'info', confirmButtonText: 'Ok'
                  })
      }
      return {
        ...state,
        events: eventfinds.length > 0 ? action.payload : state.events,
        messagge: eventfinds.length === 0 && notfound()
      }
    }

    case REGISTER_USER: {
      return {
          ...state,
          user: action.payload.user ? 'success' : 'error',
          authError: action.payload.error
      }
    }

    default:
      return state;
  }
};

export default rootReducer;
