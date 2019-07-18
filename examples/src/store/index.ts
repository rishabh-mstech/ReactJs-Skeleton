import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import RootReducer from "./combineReducer";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistReducers = persistReducer(persistConfig, RootReducer);

export const Store = createStore(persistReducers, applyMiddleware(thunk));

export const persister = persistStore(Store);
