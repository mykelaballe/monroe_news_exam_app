import Actions from '../actions'
import {DEFAULT_CATEGORY} from '../../consts'
import {createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
    attempting: false,
    list: [],
    category: DEFAULT_CATEGORY
})

const doAttemptGetList = state => state.merge({attempting: true})

const doDoneAttemptGetList = state => state.merge({attempting: false})

const doSetList = (state, {list}) => state.merge({list})

const doSetCategory = (state, {category}) => state.merge({category})

const HANDLERS = {
    [Actions.Types.ATTEMPT_GET_NEWS_LIST]: doAttemptGetList,
    [Actions.Types.DONE_ATTEMPT_GET_NEWS_LIST]: doDoneAttemptGetList,
    [Actions.Types.SET_NEWS_LIST]: doSetList,
    [Actions.Types.SET_CATEGORY]: doSetCategory
}

export default createReducer(INITIAL_STATE, HANDLERS)