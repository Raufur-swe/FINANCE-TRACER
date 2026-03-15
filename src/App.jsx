import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddBalnce, addCost } from './redux/features/BudgetOprator'
import Card from './componets/Card'

const App = () => {

  const balance = useSelector((state) => state.budget.balance)
  const cost = useSelector((state) => state.budget.cost)
  const categories = useSelector(state => state.budget.categories);
 
  const dispatch = useDispatch()
  
  const [selectedCategory, setSelectedCategory] = useState("")
  
  const [ammount, setAmmount] = useState(0)

  const [Cost, setCost] = useState(0)



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

      <input type="number" placeholder='Enter ammount' className='border' value={Cost} onChange={(e) => setCost(e.target.value)} />
      <button onClick={() => dispatch(addCost({
        ammount: Number(Cost),
        categories: selectedCategory
      }))} >
        set cost
      </button>
      <Card title="Remaining Balance" amount={balance - cost} />
      catagory : {selectedCategory}
    </div>
  )
}

export default App