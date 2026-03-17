import React from 'react'
import { useSelector } from 'react-redux'

const ExpenseTable = () => {

    const expenses = useSelector((state) => state.budget.expenses);
    return (
        <table style={{ border: "1px solid black", borderCollapse: "collapse" }} >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((item , index)=>(
                    <tr key={index} >
                        <td>{index + 1}</td>
                        <td>{item.categorie}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ExpenseTable