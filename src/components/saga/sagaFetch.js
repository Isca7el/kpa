import {put, takeEvery, call} from "redux-saga/effects";
import { setFetch, FETCH_REQUEST } from "../reducer/saga reducer";

const fetchRequest = () => fetch("https://graphqlzero.almansi.me/api", {
    "method": "GET",
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
}).then(res => res.json()).then(console.log)


function* fetchRequestWorker() {
    const data = yield call(fetchRequest)
    yield put(setFetch(data))
}

export function* fetchWatcher() {
  yield takeEvery(FETCH_REQUEST, fetchRequestWorker)
}