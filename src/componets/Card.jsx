import React from 'react'

const Card = ({ amount, title }) => {
  return (
    <div className='bg-white p-5 rounded-2xl shadow flex flex-col items-center justify-center text-center'>
      <h3 className='text-sm text-gray-500'>{title}</h3>
      <h2 className='text-2xl font-bold text-sky-600 mt-2'>${amount}</h2>
    </div>
  )
}

export default Card