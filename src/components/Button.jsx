import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius}) => {
  return (
    <button className={`text-${size} p-3 hover:drop-shadow-xl`} type='button' style={{backgroundColor: bgColor, color, borderRadius}}>
      {text}
    </button>
  )
}

export default Button