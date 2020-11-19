import {takeLatest, put, call} from 'redux-saga/effects'
import Actions from '../actions'
import API from '../../api'
import {DEFAULT_CATEGORY} from '../../consts'

function * getList({payload}) {
    try {

        const category = payload && payload.category ? payload.category : DEFAULT_CATEGORY

        yield put(Actions.Creators.setCategory(category))

        const res = yield call(API.getNews, category)

        if(res.status === 200) {
            yield put(Actions.Creators.setNewsList(res.data.results))
        }
    }
    catch(err) {
        alert(err)
    }

    yield put(Actions.Creators.doneAttemptGetNewsList())
}

export default function * handler() {
    yield takeLatest(Actions.Types.ATTEMPT_GET_NEWS_LIST, getList)
}