import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from './reducers/root.reducer';
import {persistStore} from "redux-persist";
import { composeWithDevTools } from 'redux-devtools-extension';
import {APIServiceMiddleware} from './middleware';

const composeEnhancer = composeWithDevTools || compose;

export const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(APIServiceMiddleware))
);

export const persistor = persistStore(store);


