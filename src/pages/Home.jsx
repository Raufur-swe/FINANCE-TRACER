import React, { useState } from 'react'
import Card from '../componets/Card';
import ExpenseTable from '../componets/ExpenseTable';
import ExpenseChart from '../componets/ExpenseChart';
import { useDispatch, useSelector } from 'react-redux';
import { AddBalnce, addCost } from '../redux/features/BudgetOprator';
import { logout } from '../redux/features/AuthSlice';

const Home = () => {
    const balance = useSelector((state) => state.budget.balance)
  const cost = useSelector((state) => state.budget.cost)
  const categories = useSelector(state => state.budget.categories);
 
  const dispatch = useDispatch()
  
  const [selectedCategory, setSelectedCategory] = useState("")
  
  const [ammount, setAmmount] = useState(0)

  const [expance, setExpance] = useState(0)
  
    return (
    <div>
             <Card title="Total-income:$" amount={balance} />
      <input type="number" placeholder='Enter ammount' className='border' value={ammount} onChange={(e) => setAmmount(e.target.value)} />
      <button onClick={() => dispatch(AddBalnce(Number(ammount)))} >
        set Balance
      </button>

      <Card title="total cost" amount={cost}  />

      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} >
        {categories.map((cat) => (
          <option key={cat.id} value={cat.name}>{cat.name}</option>
        ))}
      </select>

      <input type="number" placeholder='Enter ammount' className='border' value={expance} onChange={(e) => setExpance(e.target.value)} />
      <button onClick={() => dispatch(addCost({
        amount: Number(expance),
        categorie: selectedCategory
      }))} >
        set cost
      </button>
      <Card title="Remaining Balance" amount={balance - cost} />
     <ExpenseTable/>
      <ExpenseChart/> 

      <button onClick={()=>dispatch(logout())} ></button>
    </div>
  )
}

export default Home