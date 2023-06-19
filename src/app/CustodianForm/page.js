'use client'
import React from 'react'
import FormHead from '../components/common/FormHead'
import StyledContainer from '../components/common/StyledContainer'
import CustodianSideNav from '../components/CustodianForm/CustodianSideNav'
import ClientOnly from '../components/ClientOnly'
import Certification from '../components/CustodianForm/Certification'
import OtherInformation from '../components/CustodianForm/OtherInformation'
import CustodianDetails from '../components/CustodianForm/CustodianDetails'

const CustodianForm = () => {
  const [activeSec, setActiveSec] = React.useState('custodian-details')
  return (
    <ClientOnly>
      <StyledContainer direction="column" width="95vw" m="auto">
        <FormHead
          title="Custodian Form"
          subtitle="Lorem ipsum dolor sit amet"
        />
        <StyledContainer
          justify="space-between"
          items="flex-start"
          gap="20px"
          width="100%">
          <CustodianSideNav activeSec={activeSec} setActiveSec={setActiveSec} />
          {activeSec == 'custodian-details' && <CustodianDetails />}
          {activeSec == 'other-information' && <OtherInformation />}
          {activeSec == 'certification' && <Certification />}
        </StyledContainer>
      </StyledContainer>
    </ClientOnly>
  )
}

export default CustodianForm
