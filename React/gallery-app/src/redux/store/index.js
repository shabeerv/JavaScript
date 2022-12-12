import { combineReducers, configureStore } from "@reduxjs/toolkit";
import imageReducer from "../Reducers/imageReducer";
import userReducer from "../Reducers/userReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import statusReducer from "../Reducers/statusReducer";
import errorReducer from "../Reducers/errorReducer";
//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['image', 'status']
    //stateReconciler: autoMergeLevel2
    // blacklist: ['isAuth']
}

// const rootPersistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['image']
//   }
  
//   const userPersistConfig = {
//     key: 'user',
//     storage,
//     blacklist: ['isAuth']
//   }

const rootReducer = combineReducers({
    user: userReducer,
    image: imageReducer,
    status: statusReducer,
    error: errorReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
        reducer: persistedReducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: [thunk]
})

export const persistor = persistStore(store)