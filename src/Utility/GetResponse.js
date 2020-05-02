import axios from 'axios';

export const GetResponse = (url) => {
    return axios.get(url)
}