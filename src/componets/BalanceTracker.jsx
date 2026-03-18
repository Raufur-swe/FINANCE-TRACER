import React from "react"
import { useSelector } from "react-redux"

const BalanceTracker = () => {
  const balance = useSelector((state) => state.budget.balance)
  const cost = useSelector((state) => state.budget.cost)

  // 🧠 Calculate remaining balance
  const remaining = balance - cost

  // ⚠️ Prevent divide by zero
  const percentage =
    balance > 0 ? Math.max(0, ((remaining / balance) * 100).toFixed(0)) : 0

  // 🎨 Dynamic color based on percentage
  let color = "green"
  if (percentage < 50) color = "orange"
  if (percentage < 20) color = "red"

  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      
      {/* 🧾 Info */}
      <p><strong>Remaining:</strong> ${remaining}</p>

      {/* 📊 Progress Bar */}
      <div
        style={{
          width: "100%",
          background: "#eee",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            background: color,
            padding: "10px",
            textAlign: "center",
            color: "white",
            transition: "0.4s ease"
          }}
        >
          {percentage}%
        </div>
      </div>
    </div>
  )
}

export default BalanceTracker