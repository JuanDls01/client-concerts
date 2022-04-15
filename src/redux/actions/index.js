import axios from 'axios';
export const GET_EVENT_DETAIL = 'GET_EVENT_DETAIL';
export const CLEAN_EVENT_DETAIL = 'CLEAN_EVENT_DETAIL';
export const GET_EVENTS = 'GET_EVENTS';
export const GET_NAME_EVENT = 'GET_NAME_EVENT';
export const GET_NAME_STAGE = 'GET_NAME_STAGE';
export const GET_NAME_ARTIST = "GET_NAME_ARTIST";


export const getEvents = () => {
    return async (dispatch) => {
        try {
            const event = await axios.get('http://localhost:3001/event');
            return dispatch ({
                type: 'GET_EVENTS',
                payload: event.data
            })
            
        } catch (error) {
            console.log(error)
        }
    }
};

export const getEventDetail = (id) => {
    return async (dispatch) => {
        try {
            const event = await axios.get('http://localhost:3001/event/' + id);
            console.log(event.data)
            return dispatch ({
                type: 'GET_EVENT_DETAIL',
                payload: event.data
            })

        } catch (error) {
            console.log(error)
        }
    }
};

export const cleanEventDetail = () => {
    return {
        type: 'CLEAN_EVENT_DETAIL'
    }
}

export const getNameEvent = (name) => {
    return async (dispatch) => {
        try {
            const event = await axios.get('http://localhost:3001/event?name=' + name);
            return dispatch({
                type: 'GET_NAME_EVENT',
                payload: event.data
            })
        }
        catch (error) {
            alert('No existen eventos!!!')
        }
    }
}

export const getNameStage = (stage) => {
    return async (dispatch) => {
        try {
            const event = await axios.get('http://localhost:3001/event?stage=' + stage);
            return dispatch({
                type: 'GET_NAME_STAGE',
                payload: event.data
            })
        }
        catch (error) {
            alert('No existen eventos!!!')
        }
    }
}

export const getNameArtist = (artist) => {
    return async (dispatch) => {
        try {
            const event = await axios.get('http://localhost:3001/event?artist=' + artist);
            return dispatch({
                type: 'GET_NAME_ARTIST',
                payload: event.data
            })
        }
        catch (error) {
            alert('No existen eventos!!!')
        }
    }
}