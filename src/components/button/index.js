import React from 'react'
import * as C from './styles'

const button = ({ Text, onClick, Type = "button"}) => {
  return (
    <C.button type={Type} onClick={onClick}>
        {Text}
    </C.button>
  )
}

export default button