import {SET_ALBUM, SET_IMAGES, SET_TITLE } from "../Redux/Constants";
import { createStore } from "redux";

const initialState = {
    albums: [],
    images: [],
    title: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES:
            return {
                ...state,
                images: action.payload
            }

        case SET_TITLE:
            return {
                ...state,
                title: action.payload
            }
            
        case SET_ALBUM:
            return {
                ...state,
                albums: action.payload
            }

        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;