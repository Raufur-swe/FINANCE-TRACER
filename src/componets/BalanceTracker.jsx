import React from "react"
import { useSelector } from "react-redux"

const BalanceTracker = () => {
  const balance = useSelector((state) => state.budget.balance)
  const cost = useSelector((state) => state.budget.cost)

  const remaining = balance - cost

  const percentage =
    balance > 0 ? Math.max(0, ((remaining / balance) * 100).toFixed(0)) : 0

  // 🎨 Tailwind color
  let barColor = "bg-green-500"
  if (percentage < 50) barColor = "bg-yellow-400"
  if (percentage < 20) barColor = "bg-red-500"

  return (
    <div className="w-full mt-4 space-y-2">

      {/* 🔹 Info */}
      <div className="flex justify-between text-sm text-gray-600">
        <p>Remaining</p>
        <p className="font-medium text-sky-600">${remaining}</p>
      </div>

      {/* 🔹 Progress Bar (thin) */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`${barColor} h-2 rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* 🔹 Percentage */}
      <p className="text-xs text-right text-gray-400">
        {percentage}%
      </p>

    </div>
  )
}

export default BalanceTracker