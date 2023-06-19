import React from 'react'
import { styled } from 'styled-components'
import StyledInput from './../common/StyledInput'
import StyledGrid from './../common/StyledGrid'
import StyledContainer from './../common/StyledContainer'
import StyledSecondaryButton from './../common/StyledSecondaryButton'
import { useRouter } from 'next/navigation'

const StyledForm = styled.form`
    width: 100%;
`

const CustodianMainTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #004A91;
    margin-bottom: 25px;
`


const CustodianDetails = () => {
  const router = useRouter()
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
            <StyledSecondaryButton color="#004A91" onClick={()=>router.push("/")}>Cancel</StyledSecondaryButton>
            <StyledSecondaryButton bg="#004A91" color="#fff" onClick={()=>router.push("/")}>Save</StyledSecondaryButton>
        </StyledContainer>

        
    </StyledContainer>
  )
}

export default CustodianDetails