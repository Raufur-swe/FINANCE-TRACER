import { configureStore , combineReducers } from "@reduxjs/toolkit";
import budgetReducer from "../redux/features/BudgetOprator"
import authReducer from "../redux/features/AuthSlice"
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"

// for saving data in local storage

//combained all slice for saving thair information
const rootReducer = combineReducers({
    auth: authReducer,
    budget : budgetReducer,
})

const persistConfig = {
    key: "root",
    storage,
    whitelist : ["auth" , "budget"] // controll what to persist
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // saving budget reducer in local storage

// configure the store
export const store = configureStore({
    reducer: persistedReducer,
    // adding a middleware . this need to be memorise as usual
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistore = persistStore(store)// saving budget reducer in local storage