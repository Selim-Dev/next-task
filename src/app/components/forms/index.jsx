'use client'
import React, { useEffect } from 'react'
import StyledContainer from '../common/StyledContainer'
import FormHead from '../common/FormHead'
import FormBody from '../common/FormBody'
import ClientOnly from '../ClientOnly'
import axios from 'axios'

const Forms = () => {
    useEffect(() => {
        axios.get("http://localhost:3000/api/forms")
        .then(res => res.json())
        .then(res => {console.log(res)})
        .catch(err => console.log(err))
    }, [])
    

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
