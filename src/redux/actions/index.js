//Here we import all de actions creator:
import ejemplo1 from './actionEj1';
import getEvents, { GET_EVENTS } from './getEvents';

export const actions = {
    GET_EVENTS,
}

const actionsCreator = {
    ejemplo1,
    getEvents
}

export default actionsCreator;