import {put, takeEvery, call} from "redux-saga/effects";
import { setFetch, FETCH_REQUEST } from "../reducer/saga reducer";

const fetchRequest = () => fetch("https://graphqlzero.almansi.me/api", {
    "method": "POST",
    "headers": { "content-type": "application/json", 
    "accept": "application/json",
  },
    "body": JSON.stringify({
      query: `{
        user(id: 1) {
          id
          name
        }
      }`
  })
})


function* fetchRequestWorker() {
    const data = yield call(fetchRequest)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setFetch(json))
}

export function* fetchWatcher() {
  yield takeEvery(FETCH_REQUEST, fetchRequestWorker)
}