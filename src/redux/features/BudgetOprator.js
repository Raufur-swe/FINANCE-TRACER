import { createSlice } from "@reduxjs/toolkit";

// initial state

const initialState = {
    balance: 0,
    cost: 0,
    expenses: [], // for listing my all expance data
    categories: [
        { id: 1, name: "Food" },
        { id: 2, name: "Health" },
        { id: 3, name: "Transport" }
    ]
}

const balanceSlice = createSlice({
    name: "budget-tracer",
    initialState,
    reducers: {
        AddBalnce: (state, action) => {
            state.balance += action.payload

        },
        addCost: (state, action) => {

            //  Extract data from action payload
            const { amount, categorie } = action.payload

            //  Validation:
            // Prevent adding expense if:
            // - category is missing
            // - category is not a string
            // - category is empty (e.g. "")
            if (!categorie || typeof categorie !== "string" || categorie.trim() === "") {
                return
            }

            //  Update total cost
            state.cost += amount

            //  Add new expense to expenses array
            state.expenses.push({
                amount,
                categorie
            })
        },
        addCategries: (state, action) => {
            state.categories = action.payload
        }

    }
})

export const { AddBalnce, addCost, addCategries } = balanceSlice.actions
export default balanceSlice.reducer