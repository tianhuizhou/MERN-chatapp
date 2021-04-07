import axios from 'axios';

const instance = axios.create({
    baseURL: "https://whatsupchat.herokuapp.com/", //backend address
})

export default instance;