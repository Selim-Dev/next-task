import React from 'react'
import { styled } from 'styled-components'

const Button = styled.button`
    font-size: 14px;
    font-weight: 600;
    padding:11px 20px;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: ${(props) => (props.bg || "initial")};
    color: ${(props) => (props.color || "black")};
`

const StyledButton = ({children,...props}) => {
  return (
    <Button {...props}>{children}</Button>
  )
}

export default StyledButton