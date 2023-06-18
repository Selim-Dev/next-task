'use client'
import React from 'react'
import FormHead from '../components/common/FormHead'
import StyledContainer from '../components/common/StyledContainer'
import CustodianSideNav from '../components/CustodianForm/CustodianSideNav'
import CustodianMain from '../components/common/CustodianMain'
import ClientOnly from '../components/ClientOnly'
import Certification from '../components/CustodianForm/Certification'

const CustodianForm = () => {
  return (
    <ClientOnly>
      <StyledContainer direction="column" width="90vw" m="auto">
        <FormHead
          title="Custodian Form"
          subtitle="Lorem ipsum dolor sit amet"
        />
        <StyledContainer
          justify="space-between"
          items="flex-start"
          gap="20px"
          width="100%">
          <CustodianSideNav />
          {/* <CustodianMain /> */}
          <Certification />
        </StyledContainer>
      </StyledContainer>
    </ClientOnly>
  )
}

export default CustodianForm
