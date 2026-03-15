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
            state.cost += action.payload.amount
            state.expenses.push({
                amount: action.payload.amount,
                categorie: action.payload.categorie
            })

        },
        addCategries: (acton, state) => {
            state.categories = acton.payload
        }

    }
})

export const { AddBalnce, addCost, addCategries } = balanceSlice.actions
export default balanceSlice.reducer