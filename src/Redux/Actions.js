import { SET_ALBUM, SET_IMAGES, SET_TITLE } from "../Redux/Constants"

export const setImages = (images) => {
    return {
        type: SET_IMAGES,
        payload: images
    }
}

export const setTitle = (title) => {
    return {
        type: SET_TITLE,
        payload: title
    }
}

export const setAlbum = (albums) => {
    return {
        type: SET_ALBUM,
        payload: albums
    }
}

