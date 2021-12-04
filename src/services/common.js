import axios from 'axios';
const http= axios.create({
    baseURL:'https://secure-gorge-84686.herokuapp.com',
    headers: {
        "Content-type": "application/json"
    }
})
export default http;