'use client'

import React from 'react'
import { styled } from 'styled-components'
import StyledContainer from './../common/StyledContainer'
import InformationIconWhite from '../icons/information-icon-white'
import PersonIconBlue from '../icons/person-icon-blue'
import PersonIconWhite from '../icons/person-icon-white'
import InformationIconBlue from '../icons/information-icon-blue'
import CertificateIconBlue from '../icons/certificate-icon-blue'
import CertificateIconWhite from '../icons/certificate-icon-white'
import useFormStepper from '@/app/hooks/useFormStepper'
import useCustodianForm from '@/app/hooks/useCustodianForm'
import _ from 'lodash'

const StyledList = styled.ul`
  list-style: none;
  width: 230px;
  min-width: 230px;
`
const StyledListItem = styled.li`
  padding: 13px 20px;
  font-size: 15px;
  color: ${(props) => props.color || '#004A91'};
  background-color: ${(props) => props.bg || 'rgba(255,255,255,0.5)'};
  cursor: pointer;
`

function CustodianSideNav({activeSec,setActiveSec}) {
  const formStepper = useFormStepper()
  const form = useCustodianForm();
  const handleNavClick = (active) => {
    if(active === 2 || active === 3 ){
      if(_.isEmpty(form.custodianDetails)){
        active= 1;
      }
    }
    formStepper.set(active);
  }
  return (
          <StyledList>
            <StyledListItem
            color={formStepper.step ===1?"#fff":"004A91"} bg={formStepper.step ===1?"#004A91":"fff"}
            onClick={()=>handleNavClick(1)}>
              <StyledContainer gap="12px">
                {formStepper.step ===1?<PersonIconWhite /> : <PersonIconBlue />}
                <span>Custodian Details</span>
              </StyledContainer>
            </StyledListItem>
            <StyledListItem color={formStepper.step ===2?"#fff":"004A91"} bg={formStepper.step ===2?"#004A91":"fff"}  onClick={()=>handleNavClick(2)}>
              <StyledContainer gap="12px">
              {formStepper.step ===2?<InformationIconWhite /> : <InformationIconBlue />}

                <span>Other Information</span>
              </StyledContainer>
            </StyledListItem>
            <StyledListItem
            color={formStepper.step ===3?"#fff":"004A91"} bg={formStepper.step ===3?"#004A91":"fff"}
            onClick={()=>handleNavClick(3)}>
              <StyledContainer gap="12px">
              {formStepper.step ===3?<CertificateIconWhite /> : <CertificateIconBlue />}

                <span>Certification</span>
              </StyledContainer>
            </StyledListItem>
          </StyledList>
  )
}

export default CustodianSideNav
