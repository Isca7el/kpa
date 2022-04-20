import { takeEvery, put, call } from 'redux-saga/effects'
import { getUsers } from "../../api";
import { GET_REQUEST } from '../reducer/constants';
import { setUsers } from '../actions/actions';

export function* workerSaga() {
    const { data } = yield call(getUsers);
    yield put(setUsers(data));
}

export  function* watchSaga() {
    yield takeEvery(GET_REQUEST, workerSaga)
}

export default function* rootSaga() {
    yield watchSaga();
}