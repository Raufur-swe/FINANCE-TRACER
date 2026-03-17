import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../redux/features/BudgetOprator"
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"

// for saving data in local storage
const persistConfig = {
    key: "budget",
    storage
}

const persistedReducer = persistReducer(persistConfig, budgetReducer) // saving budget reducer in local storage

// configure the store
export const store = configureStore({
    reducer: {
        budget: persistedReducer
    },
    // adding a middleware . this need to be memorise as usual
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistore = persistStore(store)// saving budget reducer in local storage