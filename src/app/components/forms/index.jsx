'use client'
import React, { useEffect, useState } from 'react'
import StyledContainer from '../common/StyledContainer'
import FormHead from '../common/FormHead'
import FormBody from './FormBody'
import ClientOnly from '../ClientOnly'
import axios from 'axios'

const Forms = () => {
    const [forms, setForms] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/api/forms")
        // .then(res => res.json())
        .then(res => {setForms(res.data.data.forms)})
        .catch(err => console.log(err))
    }, [])
    


    console.log(forms)


  return (
    <ClientOnly>
      <StyledContainer direction="column" width="90vw" m="auto">
        <FormHead
          title="Forms"
          subtitle="All the compulsory forms are available here"
          showFilters={true}
        />
        <FormBody forms={forms} />
      </StyledContainer>
    </ClientOnly>
  )
}

export default Forms
