import React from 'react'
import { useSelector } from 'react-redux'

const ExpenseTable = () => {
  const expenses = useSelector((state) => state.budget.expenses)

  return (
    <div className="w-full rounded-xl border border-sky-200">

      {/* 🔥 scroll container */}
      <div className="max-h-75 overflow-y-auto">

        <table className="w-full text-sm text-left border-collapse">
          
          {/* 🔹 Head (sticky) */}
          <thead className="bg-sky-200 text-sky-800 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Amount</th>
            </tr>
          </thead>

          {/* 🔹 Body */}
          <tbody className="bg-white">
            {expenses.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-400">
                  No expenses yet 😴
                </td>
              </tr>
            ) : (
              expenses.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-sky-50 transition"
                >
                  <td className="px-4 py-3">{index + 1}</td>

                  <td className="px-4 py-3">
                    <span className="px-3 py-1 rounded-full text-xs bg-sky-100 text-sky-700">
                      {item.categorie}
                    </span>
                  </td>

                  <td className="px-4 py-3 font-semibold text-rose-500">
                    ${item.amount}
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>

      </div>

    </div>
  )
}

export default ExpenseTable