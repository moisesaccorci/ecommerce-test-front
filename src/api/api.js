import axios from "axios";

const api = axios.create({
    baseURL: "https://test-ecommerce-api-ma.herokuapp.com",
    headers: {
        "Content-Type": "Authorization",
        "Content-Type": "application/json",
        Accept: 'application/json',
        Authorization: `Bearer key-magic`,
    },

})

export default api