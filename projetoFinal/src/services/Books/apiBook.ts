import axios from 'axios'


const api = axios.create({
    baseURL: "https://6678750d0bd45250561ebb09.mockapi.io/"
});

export default api;