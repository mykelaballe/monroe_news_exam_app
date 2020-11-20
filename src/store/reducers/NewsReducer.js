import Actions from '../actions'
import {DEFAULT_CATEGORY, DEFAULT_LOCATION} from '../../consts'
import {createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
    attempting: false,
    list: [],
    category: DEFAULT_CATEGORY,
    location: DEFAULT_LOCATION
})

const doAttemptGetList = state => state.merge({attempting: true})

const doDoneAttemptGetList = state => state.merge({attempting: false})

const doSetList = (state, {list}) => state.merge({list})

const doSetCategory = (state, {category}) => state.merge({category})

const doSetLocation = (state, {location}) => state.merge({location})

const HANDLERS = {
    [Actions.Types.ATTEMPT_GET_NEWS_LIST]: doAttemptGetList,
    [Actions.Types.DONE_ATTEMPT_GET_NEWS_LIST]: doDoneAttemptGetList,
    [Actions.Types.SET_NEWS_LIST]: doSetList,
    [Actions.Types.SET_CATEGORY]: doSetCategory,
    [Actions.Types.SET_LOCATION]: doSetLocation
}

export default createReducer(INITIAL_STATE, HANDLERS)