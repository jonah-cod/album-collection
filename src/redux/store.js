import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { manipulateAlbums } from "./reducers/albumreducer";
import { composeWithDevTools } from 'redux-devtools-extension'

const middleWare = [thunk]


export const store = createStore(
    manipulateAlbums, composeWithDevTools(applyMiddleware(...middleWare))
);