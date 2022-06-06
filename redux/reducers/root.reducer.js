import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux";
import {appReducer} from "./app.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
    appReducer: appReducer,
    userReducer: userReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['appReducer', 'userReducer']
}

export default persistReducer(persistConfig, rootReducer);
