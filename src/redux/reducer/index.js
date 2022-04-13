import { GET_EVENTS, GET_EVENT_DETAIL, CLEAN_EVENT_DETAIL } from '../actions/index'

const initialState = {
    events: [],
    details: []
}

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

export default rootReducer;