import { takeEvery, put } from 'redux-saga/effects'
import { getUsers } from "../../api";
import { GET_REQUEST } from '../reducer/constants';
import { setUsers } from '../actions/actions';

export function* workerSaga() {
    const data = yield getUsers();
    console.log(data)
}

export  function* watchSaga() {
    yield takeEvery(GET_REQUEST, workerSaga)
}

export default function* rootSaga() {
    yield watchSaga();
}