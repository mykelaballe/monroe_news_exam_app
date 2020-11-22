import axios from 'axios'
import {BASE_URL} from 'consts'

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'Content-Type',
        'Content-Type': 'application/json'
    }
})