import React from 'react'
import { styled } from 'styled-components'


const Grid = styled.div`
    display: grid;
    grid-template-columns: ${(props)=>(props.cols? `repeat(${props.cols},1fr)` : `repeat(1,1fr)`)};
    gap: ${(props)=>props.gap || "5px"};
    margin-top: ${(props)=>props.mt || null};
`

const StyledGrid = ({children , ...props}) => {
  return (
    <Grid {...props}>{children}</Grid>
  )
}

export default StyledGrid