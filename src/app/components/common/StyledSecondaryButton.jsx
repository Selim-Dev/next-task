import React from 'react'
import { styled } from 'styled-components'

const Button = styled.button`
    font-size: 14px;
    font-weight: 600;
    padding:14px 70px;
    outline: none;
    cursor: pointer;
    background-color: ${(props) => (props.bg || "initial")};
    color: ${(props) => (props.color || "black")};
    border:1px solid #004A91;
`

const StyledSecondaryButton = ({children,...props}) => {
  return (
    <Button {...props}>{children}</Button>
  )
}

export default StyledSecondaryButton