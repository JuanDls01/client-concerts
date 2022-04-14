export const FILT_BY_GENRE = "FILT_BY_GENRE";

function filterEventsByGenre(payload){
    return ({
        type:FILT_BY_GENRE,
        payload
    })
}

export default filterEventsByGenre;