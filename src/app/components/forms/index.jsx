'use client'
import React, { useEffect, useState } from 'react'
import StyledContainer from '../common/StyledContainer'
import FormHead from '../common/FormHead'
import FormBody from './FormBody'
import ClientOnly from '../ClientOnly'
import axios from 'axios'
import { format } from 'date-fns';
console.log('helllllllloo',format(new Date(), 'dd/MM/yyyy'))
const Forms = () => {
    const [forms, setForms] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/forms")
        // .then(res => res.json())
        .then(res => {setForms(res.data)})
        .catch(err => console.log(err))
    }, [])
    
    useEffect(() => {
      console.log(forms)
    }, [forms])

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
