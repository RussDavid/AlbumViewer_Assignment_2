import { setAlbum, setImages, setTitle } from '../Redux/Actions';
import {SET_ALBUM, SET_IMAGES, SET_TITLE } from '../Redux/Constants';

describe("setAlbum", () => {
    it("should create an action that sets albums in the store", () => {
        const albums = [{ album: "test" }];
        const expectedAction = {
            type: SET_ALBUM,
            payload: albums
        }
        expect(setAlbum(albums)).toEqual(expectedAction)
    })
}); 

describe("setImages", () => {
    it("Shou;d create an action that sets images in the store", () => {
        const images = [{ images: "test" }];
        const expectedAction = {
            type: SET_IMAGES,
            payload: images
        }
        expect(setImages(images)).toEqual(expectedAction)
    })
});

describe("setTitle", () => {
    it("Should create an action that sets titles in the store", () => {
        const titles = [{ titles: "test" }];
        const expectedAction = {
            type: SET_TITLE,
            payload: titles
        }
        expect(setTitle(titles)).toEqual(expectedAction)
    })
});