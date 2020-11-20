import {createActions} from 'reduxsauce'
import news from './types/news'
import network from './types/network'

const {Types, Creators} = createActions({
    ...news,
    ...network
})

export default {
    Types,
    Creators
}