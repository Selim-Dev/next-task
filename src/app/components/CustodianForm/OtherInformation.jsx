import React from 'react'
import { styled } from 'styled-components'
import StyledInput from './../common/StyledInput'
import StyledGrid from './../common/StyledGrid'
import StyledContainer from './../common/StyledContainer'
import StyledSecondaryButton from './../common/StyledSecondaryButton'
import { useRouter } from 'next/navigation'

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
    margin-bottom: ${(props) => props.mb || "25px"};
`


const SubTitle = styled.h5`
padding: ${(props) => props.p || '0px'};
background-color: ${(props) => props.bg || "transparent"};
color: ${(props) => props.color || "initial"};
font-size:${(props) => props.size || "16px"};
font-weight: 500;
`




const BtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  width: fit-content;
`



const StyledLabel = styled.label`
    font-size: 13px;
    color: #004A91;
    font-weight: 400;
    cursor: pointer;
`
const StyledRadio= styled.input`
    
`


const OtherInformation = () => {
  const router = useRouter()
  return (
    <StyledContainer direction='column' width="100%" items="flex-start" bg="rgba(255, 255, 255, 0.5)" p="25px 30px" >
        <CustodianMainTitle mb="10px">Other Information</CustodianMainTitle>

        <SubTitle color="#000" size="16px">
        Where do you want to send the following:        
      </SubTitle>


      <StyledGrid cols="3" gap="30px" mt="22px">
        <StyledContainer direction="column" items="flex-start">
          <SubTitle size="14px">Certificates</SubTitle>
          <StyledGrid cols="3">
            <StyledContainer gap="5px">
              <StyledRadio type="radio" id="certificate-client" name="certificate" />
              <StyledLabel htmlFor="certificate-client">Client</StyledLabel>
            </StyledContainer>
            <StyledContainer gap="5px">
              <StyledRadio type="radio" id="certificate-custodian" name="certificate" />
              <StyledLabel htmlFor="certificate-custodian">Custodian</StyledLabel>
            </StyledContainer>
            <StyledContainer gap="5px">
              <StyledRadio type="radio" id="certificate-other" name="certificate" />
              <StyledLabel htmlFor="certificate-other">Other Entity</StyledLabel>
            </StyledContainer>

          </StyledGrid>
        </StyledContainer>
        <StyledContainer direction="column" items="flex-start">
          <SubTitle size="14px">Profits or any other Income</SubTitle>
          <StyledGrid cols="3">
            <StyledContainer gap="5px">
              <StyledRadio type="radio" id="income-client" name="income" />
              <StyledLabel htmlFor="income-client">Client</StyledLabel>
            </StyledContainer>
            <StyledContainer gap="5px">
              <StyledRadio type="radio" id="income-custodian" name="income" />
              <StyledLabel htmlFor="income-custodian">Custodian</StyledLabel>
            </StyledContainer>
            <StyledContainer gap="5px">
              <StyledRadio type="radio" id="income-other" name="income" />
              <StyledLabel htmlFor="income-other">Other Entity</StyledLabel>
            </StyledContainer>

          </StyledGrid>
        </StyledContainer>
        <StyledContainer direction="column" items="flex-start">
          <SubTitle size="14px">Sales Outcomes</SubTitle>
          <StyledGrid cols="3">
            <StyledContainer gap="5px">
              <StyledRadio type="radio" id="outcome-client" name="outcome" />
              <StyledLabel htmlFor="outcome-client">Client</StyledLabel>
            </StyledContainer>
            <StyledContainer gap="5px">
              <StyledRadio type="radio" id="outcome-custodian" name="outcome" />
              <StyledLabel htmlFor="outcome-custodian">Custodian</StyledLabel>
            </StyledContainer>
            <StyledContainer gap="5px">
              <StyledRadio type="radio" id="outcome-other" name="outcome" />
              <StyledLabel htmlFor="outcome-other">Other Entity</StyledLabel>
            </StyledContainer>

          </StyledGrid>


        </StyledContainer>
      </StyledGrid>


      <StyledInput placeholder="Other Entity" mt="25px" />


        <StyledContainer gap="20px" mt="60px" ml="auto">
            <StyledSecondaryButton color="#004A91" onClick={()=>router.push("/")}>Cancel</StyledSecondaryButton>
            <StyledSecondaryButton bg="#004A91" color="#fff" onClick={()=>router.push("/")}>Save</StyledSecondaryButton>
        </StyledContainer>

        
    </StyledContainer>
  )
}

export default OtherInformation