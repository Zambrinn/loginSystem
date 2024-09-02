import React from 'react'
import * as C from "./styles";

const input = ({type, placeholder, value, onChange}) => {
  return (
    <C.input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  )
}

export default input