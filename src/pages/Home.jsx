import React, { useEffect, useState } from 'react'
import Card from '../componets/Card'
import ExpenseTable from '../componets/ExpenseTable'
import ExpenseChart from '../componets/ExpenseChart'
import { useDispatch, useSelector } from 'react-redux'
import { AddBalnce, addCost, initializeCategories } from '../redux/features/BudgetOprator'
import { logout } from '../redux/features/AuthSlice'
import BalanceTracker from '../componets/BalanceTracker'
import toast from 'react-hot-toast'

const Home = () => {
  const balance = useSelector((state) => state.budget.balance)
  const cost = useSelector((state) => state.budget.cost)
  const categories = useSelector((state) => state.budget.categories)

  const dispatch = useDispatch()
   
  useEffect(() => {
    dispatch(initializeCategories());
  }, [dispatch]);


  const [selectedCategory, setSelectedCategory] = useState("")
  const [ammount, setAmmount] = useState("")
  const [expance, setExpance] = useState("")

  const handleAddBalance = () => {
    if (!ammount) return
    dispatch(AddBalnce(Number(ammount)))
    setAmmount("")
  }

  const handleAddCost = () => {
    if (!expance || !selectedCategory) {
      return   toast.error("Please select category & enter amount ⚠️")
    }

    dispatch(addCost({
      amount: Number(expance),
      categorie: selectedCategory
    }))

  toast.success("Expense added successfully 💸")
    setExpance("")
    setSelectedCategory("")
  }

  return (
    <div className='min-h-screen bg-sky-100 p-4 md:p-8 space-y-6'>

      {/* 🔹 Top Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Card title="Total Income $" amount={balance} />
        <Card title="Total Cost $" amount={cost} />
        <Card title="Remaining $" amount={balance - cost} />
      </div>

      {/* 🔹 Balance + Cost Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>

        {/* 💰 Balance Card */}
        <div className='bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow space-y-4'>
          <h2 className='text-lg font-semibold text-sky-700'>Add Balance</h2>

          <input
            type="number"
            placeholder="Enter amount"
            className="w-full px-4 py-3 text-sm rounded-xl border border-sky-300 
            bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-400"
            value={ammount}
            onChange={(e) => setAmmount(e.target.value)}
          />

          <button
            onClick={handleAddBalance}
            className="w-full py-3 rounded-xl bg-sky-500 text-white font-medium 
            hover:bg-sky-600 active:scale-95 transition"
          >
            Add Balance
          </button>

          <BalanceTracker />
        </div>

        {/* 💸 Cost Card */}
        <div className='bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow space-y-4'>
          <h2 className='text-lg font-semibold text-sky-700'>Add Expense</h2>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 text-sm rounded-xl border border-sky-300 
            bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="" disabled hidden>
              Select Category
            </option>

            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Enter expense"
            className="w-full px-4 py-3 text-sm rounded-xl border border-sky-300 
            bg-white/70 focus:outline-none focus:ring-2 focus:ring-sky-400"
            value={expance}
            onChange={(e) => setExpance(e.target.value)}
          />

          <button
            onClick={handleAddCost}
            className="w-full py-3 rounded-xl bg-rose-500 text-white font-medium 
            hover:bg-rose-600 active:scale-95 transition"
          >
            Add Expense
          </button>
        </div>

      </div>

      {/* 🔹 Table + Chart */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='bg-white p-4 rounded-xl shadow'>
          <ExpenseTable />
        </div>

        <div className='bg-white p-4 rounded-xl shadow'>
          <ExpenseChart />
        </div>
      </div>

      {/* 🔹 Logout */}
      <div className='flex justify-end'>
        <button
          onClick={() => dispatch(logout())}
          className='px-5 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition'
        >
          Logout
        </button>
      </div>

    </div>
  )
}

export default Home