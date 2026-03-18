import React, { useState } from 'react'
import Card from '../componets/Card'
import ExpenseTable from '../componets/ExpenseTable'
import ExpenseChart from '../componets/ExpenseChart'
import { useDispatch, useSelector } from 'react-redux'
import { AddBalnce, addCost } from '../redux/features/BudgetOprator'
import { logout } from '../redux/features/AuthSlice'
import BalanceTracker from '../componets/BalanceTracker'

const Home = () => {
  const balance = useSelector((state) => state.budget.balance)
  const cost = useSelector((state) => state.budget.cost)
  const categories = useSelector((state) => state.budget.categories)

  const dispatch = useDispatch()

  // ✅ use string instead of number (important)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [ammount, setAmmount] = useState("")
  const [expance, setExpance] = useState("")

  // ✅ Handle Balance Add
  const handleAddBalance = () => {
    if (!ammount) return

    dispatch(AddBalnce(Number(ammount)))
    setAmmount("") // reset input
  }

  // ✅ Handle Cost Add
  const handleAddCost = () => {
    if (!expance || !selectedCategory) return

    dispatch(addCost({
      amount: Number(expance),
      categorie: selectedCategory
    }))

    // reset সব
    setExpance("")
    setSelectedCategory("")
  }

  return (
    <div>

      {/* Balance */}
      <Card title="Total-income:$" amount={balance} />

      <input
        type="number"
        placeholder='Enter amount'
        className='border'
        value={ammount}
        onChange={(e) => setAmmount(e.target.value)}
      />

      <button onClick={handleAddBalance}>
        Set Balance
      </button>
      <BalanceTracker/>

      {/* Cost */}
      <Card title="Total Cost" amount={cost} />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder='Enter expense'
        className='border'
        value={expance}
        onChange={(e) => setExpance(e.target.value)}
      />

      <button onClick={handleAddCost}>
        Set Cost
      </button>

      {/* Remaining */}
      <Card title="Remaining Balance" amount={balance - cost} />

      {/* Table + Chart */}
      <ExpenseTable />
      <ExpenseChart />

      {/* Logout */}
      <button onClick={() => dispatch(logout())}>
        Logout
      </button>

    </div>
  )
}

export default Home