import {createActions} from 'reduxsauce'
import news from './types/news'

const {Types, Creators} = createActions({
    ...news
})

export default {
    Types,
    Creators
}