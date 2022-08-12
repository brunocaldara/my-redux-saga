import { put } from 'redux-saga/effects';
import { loadDataUASuccess } from "../actions";

function* getUA(axios) {
    const resp = yield axios.get('https://httpbin.org/user-agent');
    yield put(loadDataUASuccess(resp.data['user-agent']));
}

export default getUA;