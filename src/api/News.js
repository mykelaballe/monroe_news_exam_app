import {API_KEY} from '../consts'
import _instance from './instance'

export default {
    getNews: (payload = 'us') => _instance.get(`${payload}.json?api-key=${API_KEY}`)
}