import React from 'react';
import { connect } from 'react-redux';
import { loadDataUARequest } from '../../actions'

const UserAgent = (props) => {
    return (
        <>
            <h1>User Agent {props.data}</h1>
            <button onClick={() => props.loadData()}>Load</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ua.isFetching,
        data: state.ua.data,
        error: state.ua.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadDataUARequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent);