import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';

import reducers from './reducers';
import Info from './components/info';
import indexSaga from './sagas';
import UserAgent from './components/user-agent/user-agent';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(indexSaga);

function App() {
  return (
    <Provider store={store}>
      <>
        <Info />
        <UserAgent />
      </>
    </Provider>
  );
}

export default App;
