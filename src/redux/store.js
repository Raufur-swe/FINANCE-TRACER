import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "../redux/features/BudgetOprator"

export const store = configureStore({
    reducer:{
        budget : budgetReducer
    }
})