import { legacy_createStore as createStore } from "redux";
import {composeWithDevTools } from "@redux-devtools/extension"
import rootReducer from "./routReducer";
import storage from "redux-persist/lib/storage"
import {persistStore,persistReducer} from "redux-persist"
import ReduxThunk from "redux-thunk"
import { applyMiddleware } from "redux";
const persistConfig={
    key :'persist-key',
    storage
 }
 const persistedReducer=persistReducer(persistConfig,rootReducer)
 const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(ReduxThunk)));
 export const persistor=persistStore(store)
 export default store;