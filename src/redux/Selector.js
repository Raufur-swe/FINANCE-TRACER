// making state for data chart

import { createSelector } from "reselect";

const selectExpenses = (state) => state.budget.expenses;

export const selectExpenseChartData = createSelector(
  [selectExpenses],
  (expenses) => {
    const categoryTotals = {};

    expenses.forEach((item) => {
      if (categoryTotals[item.categorie]) {
        categoryTotals[item.categorie] += item.amount;
      } else {
        categoryTotals[item.categorie] = item.amount;
      }
    });

    const chartData = [];

    Object.keys(categoryTotals).forEach((key) => {
      chartData.push({
        name: key,
        value: categoryTotals[key],
      });
    });

    return chartData;
  }
);