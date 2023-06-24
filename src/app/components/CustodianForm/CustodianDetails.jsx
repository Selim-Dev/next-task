import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import StyledInput from './../common/StyledInput'
import StyledGrid from './../common/StyledGrid'
import StyledContainer from './../common/StyledContainer'
import StyledSecondaryButton from './../common/StyledSecondaryButton'
import { useRouter } from 'next/navigation'
import useFormStepper from '@/app/hooks/useFormStepper'
import useCustodianForm from '@/app/hooks/useCustodianForm'
import { useForm} from "react-hook-form"

const StyledForm = styled.form`
    width: 100%;
`

const CustodianMainTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #004A91;
    margin-bottom: 25px;
`

const InputGroup = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
`
const ErrorStyled = styled.span`
    color: red;
    font-size: 12px;
    font-weight: 400;
    margin-top: 5px;
`
const CustodianDetails = () => {
    const router = useRouter();
    const formStepper = useFormStepper();
    const custodianForm = useCustodianForm();
    useEffect(() => {
    console.log("🚀 ~ file: CustodianDetails.jsx:39 ~ CustodianDetails ~ custodianForm:", custodianForm?.form?.custodianDetails?.name)
    }, [custodianForm.form])
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues:  {
            name: custodianForm?.form?.custodianDetails?.name || '',
            address: custodianForm?.form?.custodianDetails?.address || '',
            accountName: custodianForm?.form?.custodianDetails?.accountName || '',
            accountNumber: custodianForm?.form?.custodianDetails?.accountNumber || '',
        },
        mode: "onChange"
    })
    const onSubmit = (data) => {
        custodianForm.update({custodianDetails:data});
        formStepper.next();
    }
    const handleCancel = () => {
        custodianForm.reset();
        formStepper.reset();
        router.push("/")
    }

    return (
        <StyledContainer direction='column' width="100%" items="flex-start" bg="rgba(255, 255, 255, 0.5)" p="25px 30px" >
            <CustodianMainTitle>Custodian Details</CustodianMainTitle>

            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledGrid cols="2" gap="20px">
                    <InputGroup>
                        <StyledInput   {...register("name", { required: true })} width='100%' placeholder="Name*"  />
                        {errors.name ? <ErrorStyled>name field is required</ErrorStyled>:''}
                    </InputGroup>
                    <InputGroup>
                    <StyledInput   {...register("address", { required: true })} width='100%' placeholder="Address of Correspondence*" />
                        {errors.address ? <ErrorStyled>address field is required</ErrorStyled>:''}
                    </InputGroup>
                    <InputGroup>
                    <StyledInput   {...register("accountName", { required: true })} width='100%' placeholder="Account Name*" d/>
                        {errors.accountName ? <ErrorStyled>accountName field is required</ErrorStyled>:''}
                    </InputGroup>
                    <InputGroup>
                    <StyledInput   {...register("accountNumber", { required: true })} width='100%' placeholder="Account number*" />
                                            {errors.accountNumber ? <ErrorStyled>accountNumber field is required</ErrorStyled>:''}
                    </InputGroup>
                </StyledGrid>


                <StyledContainer gap="20px" mt="60px" ml="auto">
                    <StyledSecondaryButton type="button" color="#004A91" onClick={handleCancel}>Cancel</StyledSecondaryButton>
                    <StyledSecondaryButton bg="#004A91" color="#fff">Save</StyledSecondaryButton>
                </StyledContainer>
            </StyledForm>


        </StyledContainer>
    )
}

export default CustodianDetails