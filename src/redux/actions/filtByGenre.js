export const FILT_BY_GENRE = "FILT_BY_GENRE";

export function filterEventsByGenre(payload){
    return ({
        type:FILT_BY_GENRE,
        payload
    })
}