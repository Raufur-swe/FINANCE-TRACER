import React from 'react'
import { useSelector } from 'react-redux'
import { Cell, Pie, PieChart, Tooltip } from 'recharts'
import { selectExpenseChartData } from '../redux/Selector'
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ExpenseChart = () => {

    const chartData = useSelector(selectExpenseChartData);
    return (
        <PieChart width={400} height={400}>
            <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
            >
                {chartData.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                    />
                ))}
            </Pie>

            <Tooltip />
        </PieChart>
    )
}

export default ExpenseChart