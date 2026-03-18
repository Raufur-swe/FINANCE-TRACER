import { createSlice } from "@reduxjs/toolkit";

// 🔥 Default categories (future e ekhane add korlei auto merge hobe)
const defaultCategories = [
  { id: 1, name: "Food" },
  { id: 2, name: "Health" },
  { id: 3, name: "Transport" },
  { id: 4, name: "Education" },
  { id: 5, name: "Home" },
];

// initial state

const initialState = {
    balance: 0,
    cost: 0,
    expenses: [], // for listing my all expance data
    categories: []
}

const balanceSlice = createSlice({
    name: "budget-tracer",
    initialState,
    reducers: {
            initializeCategories: (state) => {
      const existing = state.categories;

      const merged = [...existing];

      defaultCategories.forEach((def) => {
        const exists = existing.find((c) => c.id === def.id);
        if (!exists) {
          merged.push(def);
        }
      });

      state.categories = merged;
    },
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
                categorie,
                id:Date.now(),
            })
        },
            addCategory: (state, action) => {
      const name = action.payload;

      if (!name || typeof name !== "string" || name.trim() === "") return;

      // prevent duplicate
      const exists = state.categories.find(
        (c) => c.name.toLowerCase() === name.toLowerCase()
      );
      if (exists) return;

      const newId = state.categories.length
        ? Math.max(...state.categories.map((c) => c.id)) + 1
        : 1;

      state.categories.push({
        id: newId,
        name,
      });
    },

    }
})

export const { AddBalnce, addCost, addCategries, initializeCategories } = balanceSlice.actions
export default balanceSlice.reducer