import React from 'react';
import { connect } from 'react-redux';
import { loadDataRequest } from '../../actions'

const Info = (props) => {
    return (
        <>
            <h1>Info {props.data}</h1>
            {!props.isFetching && <button onClick={() => props.loadData()}>Load</button>}
            {props.isFetching && <span>Loading...</span>}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadDataRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);