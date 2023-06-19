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
  const handleNavClick = (active) => {
    setActiveSec(active)
  }
  return (
          <StyledList>
            <StyledListItem
            color={activeSec=="custodian-details"?"#fff":"004A91"} bg={activeSec=="custodian-details"?"#004A91":"fff"}
            onClick={()=>handleNavClick("custodian-details")}>
              <StyledContainer gap="12px">
                {activeSec=="custodian-details"?<PersonIconWhite /> : <PersonIconBlue />}
                <span>Custodian Details</span>
              </StyledContainer>
            </StyledListItem>
            <StyledListItem color={activeSec=="other-information"?"#fff":"004A91"} bg={activeSec=="other-information"?"#004A91":"fff"}  onClick={()=>handleNavClick("other-information")}>
              <StyledContainer gap="12px">
              {activeSec=="other-information"?<InformationIconWhite /> : <InformationIconBlue />}

                <span>Other Information</span>
              </StyledContainer>
            </StyledListItem>
            <StyledListItem
            color={activeSec=="certification"?"#fff":"004A91"} bg={activeSec=="certification"?"#004A91":"fff"}
            onClick={()=>handleNavClick("certification")}>
              <StyledContainer gap="12px">
              {activeSec=="certification"?<CertificateIconWhite /> : <CertificateIconBlue />}

                <span>Certification</span>
              </StyledContainer>
            </StyledListItem>
          </StyledList>
  )
}

export default CustodianSideNav
