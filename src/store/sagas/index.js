import {fork} from 'redux-saga/effects'
import NewsSaga from './NewsSaga'

export default function * () {
    yield fork(NewsSaga)
}