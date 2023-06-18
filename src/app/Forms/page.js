'use client'
import React from 'react'
import StyledContainer from '../components/common/StyledContainer'
import FormHead from '../components/common/FormHead'
import FormBody from '../components/common/FormBody'
import ClientOnly from '../components/ClientOnly'

const Forms = () => {
  return (
    <ClientOnly>
      <StyledContainer direction="column" width="90vw" m="auto">
        <FormHead
          title="Forms"
          subtitle="All the compulsory forms are available here"
          showFilters={true}
        />
        <FormBody />
      </StyledContainer>
    </ClientOnly>
  )
}

export default Forms
