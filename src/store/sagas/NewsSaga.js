import {takeLatest, put, call, select} from 'redux-saga/effects'
import Actions from '../actions'
import API from '../../api'
import {DEFAULT_CATEGORY, NEWS_LIST_PERSIST_KEY, CATEGORY_PERSIST_KEY, LOCATION_PERSIST_KEY} from '../../consts'
import AsyncStorage from '@react-native-async-storage/async-storage'

function * getList({payload = {}}) {
    try {

        const state = yield select()

        const isNetworkConnected = state.network.isConnected

        let location = state.news.location || ''

        if(payload.location !== undefined) {
            location = payload.location
            yield put(Actions.Creators.setLocation(location))
        }

        const category = (payload.category || state.news.category) || DEFAULT_CATEGORY

        yield put(Actions.Creators.setCategory(category))

        let sourceList = []

        if(isNetworkConnected) {
            const res = yield call(API.getNews, category)
            if(res.status == 200) {
                sourceList = res.data.results

                yield call(AsyncStorage.setItem, NEWS_LIST_PERSIST_KEY, JSON.stringify(res.data.results))
            }
        }
        else {
            let persistedNewsData = yield call(AsyncStorage.getItem, NEWS_LIST_PERSIST_KEY)
            sourceList = JSON.parse(persistedNewsData)
        }

        let list = sourceList

        yield call(AsyncStorage.setItem, CATEGORY_PERSIST_KEY, category)
        yield call(AsyncStorage.setItem, LOCATION_PERSIST_KEY, location)

        if(location) {
            list = list.filter(item => item.geo_facet.indexOf(location) >= 0)
        }

        yield put(Actions.Creators.setNewsList(list))
    }
    catch(err) {
        alert(err)
    }

    yield put(Actions.Creators.doneAttemptGetNewsList())
}

export default function * handler() {
    yield takeLatest(Actions.Types.ATTEMPT_GET_NEWS_LIST, getList)
}