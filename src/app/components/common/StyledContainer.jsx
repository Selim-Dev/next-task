import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    width:${(props)=>(props.width || "fit-content")};
    display: flex;
    flex-direction: ${(props) => props.direction || "row"};
    justify-content: ${(props) => props.justify || "flex-start"};
    align-items: ${(props) => props.items || "center"};
    gap: ${(props) => props.gap || "5px"};
    background-color: ${(props) => props.bg || "initial"};
    padding: ${(props) => props.p || "initial"};
    margin: ${(props) => props.m || "initial"};
    margin-top: ${(props) => props.mt || "initial"};
    margin-left: ${(props) => props.ml || null};
    float: ${(props) => props.float || "initial"};
`

const StyledContainer = ({children , ...props}) => {
  return (
    <Container {...props}>{children}</Container>
  )
}

export default StyledContainer