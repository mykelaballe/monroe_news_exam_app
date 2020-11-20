import {combineReducers} from 'redux'
import NewsReducer from './NewsReducer'
import NetworkReducer from './NetworkReducer'

export default combineReducers({
    news: NewsReducer,
    network: NetworkReducer
})