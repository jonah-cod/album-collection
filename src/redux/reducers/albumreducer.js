import { REQUESTFAILED, REQUESTING, REQUESTSUCCESS } from "../types";

const initialState = {
    loading: false,
    albums: []
}

export const manipulateAlbums = (state = initialState, { type, payload }) => {
    switch (type) {
        case REQUESTING:
            return ({
                ...state.loading,
                loading: true
            })

        case REQUESTSUCCESS:
            return ({
                ...state.albums,
                payload,
                ...state.loading,
                loading: false
            })


        default:
            return state;
    }
}