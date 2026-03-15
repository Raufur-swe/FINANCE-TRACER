import React from 'react'

const Card = ({amount,title }) => {
  return (
    <div className='flex  w-50 p-4 border border-gray-500 ' >
        
        <h3>{title}</h3>
        <h2>{amount}</h2>

    </div>
  )
}

export default Card