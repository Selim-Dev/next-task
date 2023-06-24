import React from 'react'
import { styled } from 'styled-components'
import StyledInput from './../common/StyledInput'
import StyledGrid from './../common/StyledGrid'
import StyledContainer from './../common/StyledContainer'
import StyledSecondaryButton from './../common/StyledSecondaryButton'
import { useRouter } from 'next/navigation'
import { useForm} from "react-hook-form"
import useFormStepper from '@/app/hooks/useFormStepper'
import useCustodianForm from '@/app/hooks/useCustodianForm'

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
const ErrorStyled = styled.span`
    color: red;
    font-size: 12px;
    font-weight: 400;
    margin-top: 5px;
`

const OtherInformation = () => {
  const formStepper = useFormStepper();
  const custodianForm = useCustodianForm();
  const {
      register,
      handleSubmit,
      formState: { errors },
      watch
  } = useForm({
    defaultValues:  {
      certificates: custodianForm?.form?.otherInformation?.certificates || 'client',
      profits: custodianForm?.form?.otherInformation?.profits || 'client',
      salesOutcome: custodianForm?.form?.otherInformation?.salesOutcome || 'client',
  },
    mode: "onChange"
  })
  const onSubmit = (data) => {
      custodianForm.update({otherInformation:data});
      formStepper.next();
  }
  const handleCancel = () => {
      formStepper.set(1);
  }

  return (
    <StyledContainer direction='column' width="100%" items="flex-start" bg="rgba(255, 255, 255, 0.5)" p="25px 30px" >
        <CustodianMainTitle mb="10px">Other Information</CustodianMainTitle>

        <SubTitle color="#000" size="16px">
        Where do you want to send the following:        
      </SubTitle>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>

   
      <StyledGrid cols="3" gap="30px" mt="22px">
        <StyledContainer direction="column" items="flex-start">
           <SubTitle size="14px">Certificates</SubTitle>
          <StyledGrid cols="3">
            <StyledContainer gap="5px">
              <input type="radio" value="client" {...register("certificates")} id="certificate-client" />
              <StyledLabel htmlFor="certificate-client">Client</StyledLabel>
            </StyledContainer>
            <StyledContainer gap="5px">
              <input type="radio" value="custodian" {...register("certificates")}  id="certificate-custodian"/>

              <StyledLabel htmlFor="certificate-custodian">Custodian</StyledLabel>
            </StyledContainer>
            <StyledContainer gap="5px">
              <input type="radio" value="other entity" {...register("certificates")}  id="certificate-other"/>

              <StyledLabel htmlFor="certificate-other">Other Entity</StyledLabel>
            </StyledContainer>
          </StyledGrid>
          {errors.certificates ? <ErrorStyled>certificates field is required</ErrorStyled>:''}
        </StyledContainer>
        <StyledContainer direction="column" items="flex-start">
          <SubTitle size="14px">Profits or any other Income</SubTitle>
          <StyledGrid cols="3">
            <StyledContainer gap="5px">
              <input type="radio" value="client" {...register("profits")} id="certificate-client" />
              <StyledLabel htmlFor="certificate-client">Client</StyledLabel>
            </StyledContainer>
            <StyledContainer gap="5px">
              <input type="radio" value="custodian" {...register("profits")}  id="certificate-custodian"/>

              <StyledLabel htmlFor="certificate-custodian">Custodian</StyledLabel>
            </StyledContainer>
            <StyledContainer gap="5px">
              <input type="radio" value="other entity" {...register("profits")}  id="certificate-other"/>

              <StyledLabel htmlFor="certificate-other">Other Entity</StyledLabel>
            </StyledContainer>
          </StyledGrid>
          {errors.profits ? <ErrorStyled>Profits or any other Income field is required</ErrorStyled>:''}
        </StyledContainer>
        <StyledContainer direction="column" items="flex-start">
          <SubTitle size="14px">Sales Outcomes</SubTitle>
          <StyledGrid cols="3">
            <StyledContainer gap="5px">
              <input type="radio" value="client" {...register("salesOutcome")} id="certificate-client" />
              <StyledLabel htmlFor="certificate-client">Client</StyledLabel>
            </StyledContainer>
            <StyledContainer gap="5px">
              <input type="radio" value="custodian" {...register("salesOutcome")}  id="certificate-custodian"/>

              <StyledLabel htmlFor="certificate-custodian">Custodian</StyledLabel>
            </StyledContainer>
            <StyledContainer gap="5px">
              <input type="radio" value="other entity" {...register("salesOutcome")}  id="certificate-other"/>

              <StyledLabel htmlFor="certificate-other">Other Entity</StyledLabel>
            </StyledContainer>
          </StyledGrid>
          {errors.salesOutcome ? <ErrorStyled>Sales Outcomes field is required</ErrorStyled>:''}
        </StyledContainer>
      
      
      </StyledGrid>


      <StyledInput placeholder="Other Entity" mt="25px" />


        <StyledContainer gap="20px" mt="60px" ml="auto">
            <StyledSecondaryButton type="button" color="#004A91" onClick={handleCancel}>Cancel</StyledSecondaryButton>
            <StyledSecondaryButton bg="#004A91" color="#fff" >Save</StyledSecondaryButton>
        </StyledContainer>
      </StyledForm>
        
    </StyledContainer>
  )
}

export default OtherInformation