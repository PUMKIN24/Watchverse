import React from 'react'

const Button = ({name}) => {
  return (
    <div className='mr-4 bg-gray-200 p-2 rounded-lg'>
        <button>{name}</button>
    </div>
  )
}

export default Button