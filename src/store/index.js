import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import randomId from '../middlewares/randomId';
import createForm from '../middlewares/createForm';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(randomId, createForm));

const store = createStore(reducer, enhancer);

window.store = store;
export default store;
