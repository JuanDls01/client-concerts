//Here we import all de actions creator:
import getEventDetail, { GET_EVENT_DETAIL } from './getEventDetail';
import filtEvents, { FILT_EVENTS } from './actionFiltEvents';
import getGenres, { GET_GENRES } from './actionGenres';
import cleanEventDetail, { CLEAN_EVENT_DETAIL } from './cleanEventDetail';
import getEvents, { GET_EVENTS } from './getEvents';
import getNameEvent, { GET_NAME_EVENT } from './getNameEvent';
import registerUser, { REGISTER_USER } from './registerUser';
import postArtist, {POST_ARTIST} from './postRegisterArtist';

export const actions = {
    GET_EVENTS,
    GET_EVENT_DETAIL,
    GET_GENRES,
    FILT_EVENTS,
    CLEAN_EVENT_DETAIL,
    GET_NAME_EVENT,
    REGISTER_USER,
    POST_ARTIST,
}

const actionsCreator = {
    getEvents,
    getEventDetail,
    filtEvents,
    getGenres,
    cleanEventDetail,
    getNameEvent,
    registerUser,
    postArtist,
}

export default actionsCreator;