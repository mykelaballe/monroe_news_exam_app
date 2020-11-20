import {takeLatest, put, call, select} from 'redux-saga/effects'
import Actions from '../actions'
import API from '../../api'
import {DEFAULT_CATEGORY} from '../../consts'

function * getList({payload = {}}) {
    try {

        const state = yield select()

        let location = state.news.location || ''

        if(payload.location !== undefined) {
            location = payload.location
            yield put(Actions.Creators.setLocation(location))
        }

        const category = (payload.category || state.news.category) || DEFAULT_CATEGORY

        yield put(Actions.Creators.setCategory(category))

        const res = yield call(API.getNews, category)

        if(res.status === 200) {

            let list = res.data.results

            if(location) {
                list = list.filter(item => item.geo_facet.indexOf(location) >= 0)
            }

            yield put(Actions.Creators.setNewsList(list))
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