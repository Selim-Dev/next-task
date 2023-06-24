import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import StyledInput from './../common/StyledInput'
import StyledGrid from './../common/StyledGrid'
import StyledContainer from './../common/StyledContainer'
import StyledSecondaryButton from './../common/StyledSecondaryButton'
import { useRouter } from 'next/navigation'
import { useForm} from "react-hook-form"
import useFormStepper from '@/app/hooks/useFormStepper'
import useCustodianForm from '@/app/hooks/useCustodianForm'
import { format } from 'date-fns'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

const Container = styled.div`
  width: 90vw;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #004a91;
    margin-bottom: 25px;
  }
`

const StyledForm = styled.form`
  width: 100%;
`

const CustodianTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #004a91;
  margin-bottom: ${(props) => props.mb || "0px"};
`

const CertificationParagraph = styled.p`
padding: ${(props) => props.p || '0px'};
background-color: ${(props) => props.bg || "transparent"};
color: ${(props) => props.color || "initial"};
font-size:${(props) => props.size || "16px"};
`

const BtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  width: fit-content;
`


const StyledLabel = styled.label`
    font-size: 14px;
    color: #004A91;
    font-weight: 400;
    cursor: pointer;
`
const StyledCheckBox = styled.input`
    
`
const ErrorStyled = styled.span`
    color: red;
    font-size: 12px;
    font-weight: 400;
    margin-top: 5px;
`
const notify = () => toast('Form Submitted Successfully', {
  duration: 4000,
  position: 'top-left',

  // Styling
  style: {},
  className: '',

  // Custom Icon
  icon: '👏',

  // Change colors of success/error/loading icon
  iconTheme: {
    primary: '#000',
    secondary: '#fff',
  },

  // Aria
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },
});

const Certification = () => {
  const router = useRouter()
  const formStepper = useFormStepper();
  const custodianForm = useCustodianForm();

  const {
      register,
      handleSubmit,
      formState: { errors },
      watch
  } = useForm({
    defaultValues:  {
      certification: custodianForm?.form?.certification || null,
  },
    mode: "onChange"
  })
  const onSubmit = (data) => {
    toast.success('Form submitted successfully');
      const newData = {...custodianForm.form, ...data,createdAt: format(new Date(), "dd/MM/yyyy")};
      try{
        const response = axios.post('http://localhost:4000/forms', newData);
        formStepper.reset();
        custodianForm.reset();
        notify();
        router.push('/');
      }catch(e){console.log(e)}
  }
  const handleCancel = () => {
      formStepper.set(2);
  }

  return (
    <StyledContainer
      direction="column"
      width="100%"
      items="flex-start"
      bg="rgba(255, 255, 255, 0.5)"
      p="25px 30px">
      <CustodianTitle mb="25px">Custodian Details</CustodianTitle>
      <div>
      
      <Toaster />
    </div>
      <CertificationParagraph bg="#D9D9D9" p="20px">
        I hereby certify the information that I have provided in this
        subscription form is valid, correct, and complete, and an integral part
        of this subscription form, and XYZ Capital in its capacity as the Fund
        Manager has the full right to rely on such data and information.
        <br />
        <br />
        The applicant confirms that they have read and understood the Terms and
        Conditions of the Fund, and accepts and agrees to what is stated therein
        irrevocably and unconditionally.
        <br />
        <br />
        The applicant agrees to participate in the Fund with the number of units
        specified in This subscription form submitted by XYZ Capital in
        accordance with the provisions of the Investment Funds Regulations
        issued by the Capital Market Authority in the Kingdom of Saudi Arabia,
        and the payment of the subscription value in accordance with the Terms
        and Conditions and this subscription form.
        <br />
        <br />
        The applicant acknowledges that they fulfill all the requirements
        stipulated in the Terms and Conditions. Accordingly, by accepting the
        Fund Manager to the signed subscription form, they will become legally
        bound by all the terms, conditions, and documents related to it and to
        the offering of the Funds units, and this subscription form is subject
        to all the provisions stipulated in the Terms and Conditions of the
        Fund.
        <br />
        <br />
      </CertificationParagraph>

    <StyledForm onSubmit={handleSubmit(onSubmit)}>
    <StyledContainer mt="20px" items="center">
        <input type="checkbox" id="confirm" {...register('certification',{required:true})}/>
        <StyledLabel htmlFor="confirm" >Please tick the box to certify.</StyledLabel>
    </StyledContainer>
    {errors.certification ? <ErrorStyled>You must agree to requirements</ErrorStyled>:''}

    <StyledContainer direction='column' gap="5px" items="flex-start" mt="32px">
    <CustodianTitle>Digitally Certify Document</CustodianTitle>
    <CertificationParagraph color="#004A91" size="14px">
    You can click on the below button it will redirect to a platform where you can E-Sign the document to certify the details and the contract with XYZ.Capital
        
      </CertificationParagraph>
    </StyledContainer>


    <StyledSecondaryButton bg="#004A91" color="#fff" mt="30px">
          E-Sign Document
        </StyledSecondaryButton>


      <StyledContainer gap="20px" mt="60px" ml="auto">
        <StyledSecondaryButton color="#004A91" onClick={handleCancel}>Cancel</StyledSecondaryButton>
        <StyledSecondaryButton bg="#004A91" color="#fff" >
          Save
        </StyledSecondaryButton>
      </StyledContainer>
      </StyledForm >
    </StyledContainer>
  )
}

export default Certification
