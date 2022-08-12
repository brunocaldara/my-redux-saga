import { put } from 'redux-saga/effects';
import { loadDataSuccess } from "../actions";

function* getIP(axios) {
    const resp = yield axios.get('https://httpbin.org/ip');
    yield put(loadDataSuccess(resp.data.origin));
}

export default getIP;