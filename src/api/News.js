import {API_KEY, DEFAULT_CATEGORY} from '../consts'
import _instance from './instance'

export default {
    getNews: (category = DEFAULT_CATEGORY) => _instance.get(`${category}.json?api-key=${API_KEY}`)
}