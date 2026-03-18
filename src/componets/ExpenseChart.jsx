import React from 'react'
import { useSelector } from 'react-redux'
import { Cell, Pie, PieChart, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { selectExpenseChartData } from '../redux/Selector'

const COLORS = ["#0ea5e9", "#22c55e", "#facc15", "#f97316", "#ef4444"]

const ExpenseChart = () => {

  const chartData = useSelector(selectExpenseChartData)

  return (
    <div className="w-full h-75 md:h-100 flex flex-col items-center justify-center">

      {chartData.length === 0 ? (
        <p className="text-gray-400">No data for chart 📊</p>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          
          <PieChart>

            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="70%"
              innerRadius="40%" // 🔥 donut style
              paddingAngle={3}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip 
              contentStyle={{
                borderRadius: "10px",
                border: "none"
              }}
            />

            <Legend />

          </PieChart>

        </ResponsiveContainer>
      )}

    </div>
  )
}

export default ExpenseChart