import React from 'react'
import { styled } from 'styled-components'
import StyledInput from './StyledInput'
import StyledGrid from './StyledGrid'
import StyledContainer from './StyledContainer'
import StyledSecondaryButton from './StyledSecondaryButton'

const Container = styled.div`
  width: 90vw;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3{
    font-size: 18px;
    font-weight: 600;
    color: #004A91;
    margin-bottom: 25px;
  }
`

const StyledForm = styled.form`
    width: 100%;
`

const CustodianMainTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #004A91;
    margin-bottom: 25px;
`




const BtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  width: fit-content;
`

const CustodianMain = () => {
  return (
    <StyledContainer direction='column' width="100%" items="flex-start" bg="rgba(255, 255, 255, 0.5)" p="25px 30px" >
        <CustodianMainTitle>Custodian Details</CustodianMainTitle>

        <StyledForm>
            <StyledGrid cols="2" gap="20px">
                <StyledInput width='100%' placeholder="Name*" />
                <StyledInput width='100%' placeholder="Name*" />
                <StyledInput width='100%' placeholder="Name*" />
                <StyledInput width='100%' placeholder="Name*" />
            </StyledGrid>
        </StyledForm>


        <StyledContainer gap="20px" mt="60px" ml="auto">
            <StyledSecondaryButton color="#004A91">Cancel</StyledSecondaryButton>
            <StyledSecondaryButton bg="#004A91" color="#fff">Save</StyledSecondaryButton>
        </StyledContainer>

        
    </StyledContainer>
  )
}

export default CustodianMain