import { FILTER, REQUESTFAILED, REQUESTING, REQUESTSUCCESS } from "../types";


export const requestsuccess = (albums) => {
    return ({
        type: REQUESTSUCCESS,
        payload: albums
    })
}
export const requestfailed = () => {
    return ({
        type: REQUESTFAILED
    })
}
export const requesting = () => {
    return ({
        type: REQUESTING
    })
}

export const filter = (filter) => {
    return ({
        type: FILTER,
        payload: filter
    })
}