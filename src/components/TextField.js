import React from 'react'

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className='flex flex-col'>
      <label className='mb-2 text-base text-gray-200'>{label}</label>
      <input
        className='bg-gray-600 py-5 px-3 rounded-md outline-none'
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default TextField