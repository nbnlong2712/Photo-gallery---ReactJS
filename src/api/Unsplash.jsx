import axios from "axios";

const API_KEY = 'hAWN1MuuPbcrVb5FJL42De8jcoSCMevXHmx6AuPDA0Y';
const API_URL = 'https://api.unsplash.com/photos';

export const fetchPhotos = (page = 1) => {
    return axios.get(API_URL, {
        params: { page, per_page: 10 },
        headers: {
            Authorization: `Client-ID ${API_KEY}`,
        },
    });
};

export const fetchPhotoDetails = (id) => {
    return axios.get(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Client-ID ${API_KEY}`,
        },
    });
};
