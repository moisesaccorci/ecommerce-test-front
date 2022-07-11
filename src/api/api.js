import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "Content-Type": "Authorization",
        "Content-Type": "application/json",
        Accept: 'application/json',
        Authorization: `Bearer key-magic`,
    },

})

export default api