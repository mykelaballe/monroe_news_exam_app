import Actions from '../actions'
import {createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
    attempting: false,
    list: []
})

const doAttemptGetList = state => state.merge({attempting: true})

const doDoneAttemptGetList = state => state.merge({attempting: false})

const doSetList = (state, {list}) => state.merge({list})

const HANDLERS = {
    [Actions.Types.ATTEMPT_GET_NEWS_LIST]: doAttemptGetList,
    [Actions.Types.DONE_ATTEMPT_GET_NEWS_LIST]: doDoneAttemptGetList,
    [Actions.Types.SET_NEWS_LIST]: doSetList
}

export default createReducer(INITIAL_STATE, HANDLERS)