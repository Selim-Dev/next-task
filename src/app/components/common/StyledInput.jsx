import React from 'react'
import { styled } from 'styled-components'

const StyledInput = styled.input`
  width:${(props)=> props.width || "300px"};
  min-width: 300px;
  max-height: 40px;
  padding: 11px 19px;
  border: 2px solid #b7b7ba;
  outline: none;
  position: relative;
  margin-top: ${(props) => props.mt || null };
  &::placeholder {
    color: #004a91;
    font-size: 14px;
    font-weight: 400;
  }
`


// const StyledInput = ({placeholder , ...props}) => {
//   return (
//     <Input type="text" placeholder={placeholder}  {...props} />
//   )
// }

export default StyledInput