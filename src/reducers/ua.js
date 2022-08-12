const initialStatue = {
    data: [],
    isFetching: false,
    error: false
}

const ua = (state = initialStatue, action) => {
    if (action.type === 'LOAD_DATA_UA_REQUEST') {
        return {
            data: [],
            isFetching: true,
            error: false
        }
    }
    if (action.type === 'LOAD_DATA_UA_SUCCESS') {
        return {
            data: action.data,
            isFetching: false,
            error: false
        }
    }
    if (action.type === 'LOAD_DATA_UA_ERROR') {
        return {
            data: [],
            isFetching: false,
            error: true
        }
    }
    return state;
}

export default ua;