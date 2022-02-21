import { FILTER, REQUESTING, REQUESTSUCCESS } from "../types";

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

        case FILTER:

            return state.payload.filter((album) => album.data.album.name.includes(payload))

        default:
            return state;
    }
}