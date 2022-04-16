import { actions } from '../actions/index';
import Swal from 'sweetalert2';

const { 
  GET_EVENTS,
  GET_EVENT_DETAIL,
  CLEAN_EVENT_DETAIL, 
  FILT_EVENTS,
  GET_GENRES,
  GET_NAME_EVENT
} = actions;

const initialState = {
  events: [],
  searchevents: [],
  details: [],
  genres: [],
  messagge: ''
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

    default:
      return state;
  }
};

export default rootReducer;

// case GET_NAME_EVENT: {
    //   const allEvents = state.searchevents
    //   console.log(allEvents)
    //   const eventFiltered = allEvents.filter(e => e.name.toLowerCase().includes(action.payload.toLowerCase()))
    //   console.log(eventFiltered)
    //   return {
    //     ...state,
    //     events: eventFiltered.length > 0 ? eventFiltered : state.events
    //   }
    // }

    // case GET_ARTIST_EVENT: {
    //   const allEvents = state.searchevents
    //   console.log(allEvents)
    //   const eventFiltered = allEvents.filter(e => e['Artist.name'] && e['Artist.name'].toLowerCase().includes(action.payload.toLowerCase()))
    //   console.log(eventFiltered)
    //   return {
    //     ...state,
    //     events: eventFiltered.length > 0 ? eventFiltered : state.events
    //   }
    // }

    // case GET_STAGE_EVENT: {
    //   const allEvents = state.searchevents
    //   console.log(allEvents)
    //   const eventFiltered = allEvents.filter(e => e['Stage.name'] && e['Stage.name'].toLowerCase().includes(action.payload.toLowerCase()))
    //   console.log(eventFiltered)
    //   return {
    //     ...state,
    //     events: eventFiltered.length > 0 ? eventFiltered : state.events
    //   }
    // }

