import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import StyledButton from './StyledButton'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const FormBodyContainer = styled.div`
  width: 90vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.5);
`

const ButtonsContainer = styled.div`
  width: fit-content;
  margin: 30px auto;
`

const StyledTable = styled.table`
  font-size: 14px;
  font-weight: 500;
`

const StyledTabledHead = styled.thead`
  background-color: #004a91;
  color: #fff;
`
const StyledTabledBody = styled.tbody`
  color: #004a91;
`

const StyledTabledRow = styled.tr``
const StyledTableCell = styled.td`
  padding: 16px 30px;
  float: ${(props) => props.float || 'initial'};
`


const StyledStatusCell = styled.span`
    padding:3px 6px;
    background-color: #EDEDEF;
    color:${(props)=> props.color || '#FFC107'}
`


const ActionBtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  width: fit-content;
`

const ActionBtn = styled.button`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.bg || 'initial'};
`

const activeBtnStyle = { bg: '#004A91', color: '#fff' }
const normalBtnStyle = { bg: '#fff', color: '#004A91' }

function FormBody({forms}) {
  const [status, setStatus] = React.useState('approved')
  const [filteredData , setFilteredData] = React.useState([])

  const handleStatusChange = (val) => {
    setStatus(val)
  }

  const statusColor = (status) => {
    if(status == 'pending'){
      return '#1FE08F'
    }else{
      return '#FFC107'
    
    }
      
  }


  useEffect(()=>{
    const newData = forms.filter(({type}) => type == status)
    setFilteredData(newData)
  } , [forms , status])



  return (
    <FormWrapper>
      <FormBodyContainer>
      
        <ButtonsContainer>
          <StyledButton
            {...(status == 'approved' ? activeBtnStyle : normalBtnStyle)}
            onClick={() => handleStatusChange('approved')}>
            Approved
          </StyledButton>
          <StyledButton
            {...(status == 'pending' ? activeBtnStyle : normalBtnStyle)}
            onClick={() => handleStatusChange('pending')}>
            Pending
          </StyledButton>
        </ButtonsContainer>

        {status == 'approved' && (
          <StyledTable>
            <StyledTabledHead>
              <StyledTabledRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Form Title</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell float="right">Actions</StyledTableCell>
              </StyledTabledRow>
            </StyledTabledHead>
            <StyledTabledBody>
            {
               filteredData?.map(({id , name , title , createdAt , custodianDetails }) => (  
                <StyledTabledRow key={id}>
                <StyledTableCell>{id}</StyledTableCell>
                <StyledTableCell>{title}</StyledTableCell>
                <StyledTableCell>{createdAt}</StyledTableCell>
                <StyledTableCell float="right">
                  <ActionBtnsContainer>
                    <ActionBtn bg="#004A91">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_233)">
                          <path
                            d="M1.3 8.97L0 13L4.03 11.7L1.3 8.97Z"
                            fill="white"
                          />
                          <path
                            d="M8.55577 1.6933L2.21313 8.03593L4.97081 10.7936L11.3134 4.45097L8.55577 1.6933Z"
                            fill="white"
                          />
                          <path
                            d="M12.805 2.015L10.985 0.195C10.725 -0.065 10.335 -0.065 10.075 0.195L9.48999 0.78L12.22 3.51L12.805 2.925C13.065 2.665 13.065 2.275 12.805 2.015Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_233">
                            <rect width="13" height="13" rx="1" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </ActionBtn>

                    <ActionBtn bg="#fff">
                      <svg
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.50008 2.09212C5.34581 2.09212 4.40796 3.02996 4.40796 4.18424C4.40796 5.33851 5.34581 6.27636 6.50008 6.27636C7.65435 6.27636 8.5922 5.33851 8.5922 4.18424C8.5922 3.02996 7.65435 2.09212 6.50008 2.09212ZM6.34137 3.21753C6.34137 3.40878 6.16798 3.55837 6.02551 3.68594C6.01114 3.6988 5.99755 3.71251 5.9848 3.72697C5.85976 3.86885 5.71192 4.03995 5.52279 4.03995C5.33069 4.03995 5.17151 3.87871 5.22996 3.69571C5.34797 3.32623 5.63697 3.03645 6.00028 2.92307C6.18284 2.86609 6.34137 3.02629 6.34137 3.21753Z"
                          fill="#004A91"
                        />
                        <path
                          d="M12.8485 3.75139C12.1415 2.87125 9.61654 0 6.5 0C3.38346 0 0.858491 2.87125 0.151498 3.75139C-0.0504994 3.99667 -0.0504994 4.35738 0.151498 4.61709C0.858491 5.49722 3.38346 8.36848 6.5 8.36848C9.61654 8.36848 12.1415 5.49722 12.8485 4.61709C13.0505 4.37181 13.0505 4.0111 12.8485 3.75139ZM6.5 7.21421C4.8263 7.21421 3.47003 5.85794 3.47003 4.18424C3.47003 2.51054 4.8263 1.15427 6.5 1.15427C8.1737 1.15427 9.52997 2.51054 9.52997 4.18424C9.52997 5.85794 8.1737 7.21421 6.5 7.21421Z"
                          fill="#004A91"
                        />
                      </svg>
                    </ActionBtn>

                    <ActionBtn bg="#DCAC00">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5.92207 7.86696L3.52755 5.47245C3.51804 5.46293 3.51049 5.45164 3.50534 5.43921C3.5002 5.42678 3.49755 5.41345 3.49755 5.4C3.49755 5.38655 3.50019 5.37322 3.50534 5.36079C3.51049 5.34836 3.51804 5.33707 3.52755 5.32755C3.53707 5.31804 3.54836 5.31049 3.56079 5.30534C3.57322 5.3002 3.58654 5.29755 3.6 5.29755C3.61346 5.29755 3.62678 5.3002 3.63921 5.30534C3.65153 5.31045 3.66274 5.31791 3.6722 5.32731C3.67228 5.32739 3.67236 5.32747 3.67245 5.32755L5.04568 6.70678L5.9 7.56484V6.354V0.6C5.9 0.573479 5.91054 0.548043 5.92929 0.52929C5.94804 0.510535 5.97348 0.5 6 0.5C6.02652 0.5 6.05196 0.510536 6.07071 0.529289C6.08946 0.548043 6.1 0.573479 6.1 0.6V6.354V7.56484L6.95432 6.70678L8.32755 5.32755C8.32764 5.32747 8.32772 5.32739 8.3278 5.32731C8.34699 5.30825 8.37294 5.29755 8.4 5.29755C8.42717 5.29755 8.45323 5.30834 8.47245 5.32755C8.49166 5.34677 8.50245 5.37283 8.50245 5.4C8.50245 5.42717 8.49166 5.45323 8.47245 5.47245L6.07793 7.86696C6.06893 7.87505 6.05854 7.88144 6.04725 7.88582L6.03646 7.89L6.02587 7.89468C6.01772 7.89828 6.00891 7.90014 6 7.90014C5.99109 7.90014 5.98228 7.89828 5.97413 7.89468L5.96354 7.89L5.95275 7.88582C5.94146 7.88144 5.93107 7.87505 5.92207 7.86696ZM11.3293 7.72929C11.348 7.71054 11.3735 7.7 11.4 7.7C11.4265 7.7 11.452 7.71054 11.4707 7.72929C11.4895 7.74804 11.5 7.77348 11.5 7.8V10.2C11.5 10.5448 11.363 10.8754 11.1192 11.1192C10.8754 11.363 10.5448 11.5 10.2 11.5H1.8C1.45522 11.5 1.12456 11.363 0.880761 11.1192C0.636964 10.8754 0.5 10.5448 0.5 10.2V7.8C0.5 7.77348 0.510535 7.74804 0.529289 7.72929C0.548043 7.71054 0.573479 7.7 0.6 7.7C0.626521 7.7 0.651957 7.71054 0.67071 7.72929C0.689465 7.74804 0.7 7.77348 0.7 7.8V10.2C0.7 10.4917 0.815892 10.7715 1.02218 10.9778C1.22847 11.1841 1.50826 11.3 1.8 11.3H10.2C10.4917 11.3 10.7715 11.1841 10.9778 10.9778C11.1841 10.7715 11.3 10.4917 11.3 10.2V7.8C11.3 7.77348 11.3105 7.74804 11.3293 7.72929Z"
                          stroke="white"
                        />
                      </svg>
                    </ActionBtn>
                  </ActionBtnsContainer>
                </StyledTableCell>
              </StyledTabledRow>))
            }
            </StyledTabledBody>
          </StyledTable>
        )}

        {status == 'pending' && (
          <StyledTable>
            <StyledTabledHead>
              <StyledTabledRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Form Title</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell float="right">Actions</StyledTableCell>
              </StyledTabledRow>
            </StyledTabledHead>
            <StyledTabledBody>

            {
              filteredData.map(({id , title , createdAt , status})=>(
                <StyledTabledRow key={id}>
                <StyledTableCell>{id}</StyledTableCell>
                <StyledTableCell>{title}</StyledTableCell>
                <StyledTableCell>{createdAt}</StyledTableCell>
                <StyledTableCell>
                    <StyledStatusCell color={() => statusColor(status)}>
                        {status}
                    </StyledStatusCell>
                </StyledTableCell>
                <StyledTableCell float="right">
                  <ActionBtnsContainer>
                    <ActionBtn bg="#004A91">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_233)">
                          <path
                            d="M1.3 8.97L0 13L4.03 11.7L1.3 8.97Z"
                            fill="white"
                          />
                          <path
                            d="M8.55577 1.6933L2.21313 8.03593L4.97081 10.7936L11.3134 4.45097L8.55577 1.6933Z"
                            fill="white"
                          />
                          <path
                            d="M12.805 2.015L10.985 0.195C10.725 -0.065 10.335 -0.065 10.075 0.195L9.48999 0.78L12.22 3.51L12.805 2.925C13.065 2.665 13.065 2.275 12.805 2.015Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_233">
                            <rect width="13" height="13" rx="1" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </ActionBtn>

                    <ActionBtn bg="#fff">
                      <svg
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M6.50008 2.09212C5.34581 2.09212 4.40796 3.02996 4.40796 4.18424C4.40796 5.33851 5.34581 6.27636 6.50008 6.27636C7.65435 6.27636 8.5922 5.33851 8.5922 4.18424C8.5922 3.02996 7.65435 2.09212 6.50008 2.09212ZM6.34137 3.21753C6.34137 3.40878 6.16798 3.55837 6.02551 3.68594C6.01114 3.6988 5.99755 3.71251 5.9848 3.72697C5.85976 3.86885 5.71192 4.03995 5.52279 4.03995C5.33069 4.03995 5.17151 3.87871 5.22996 3.69571C5.34797 3.32623 5.63697 3.03645 6.00028 2.92307C6.18284 2.86609 6.34137 3.02629 6.34137 3.21753Z"
                          fill="#004A91"
                        />
                        <path
                          d="M12.8485 3.75139C12.1415 2.87125 9.61654 0 6.5 0C3.38346 0 0.858491 2.87125 0.151498 3.75139C-0.0504994 3.99667 -0.0504994 4.35738 0.151498 4.61709C0.858491 5.49722 3.38346 8.36848 6.5 8.36848C9.61654 8.36848 12.1415 5.49722 12.8485 4.61709C13.0505 4.37181 13.0505 4.0111 12.8485 3.75139ZM6.5 7.21421C4.8263 7.21421 3.47003 5.85794 3.47003 4.18424C3.47003 2.51054 4.8263 1.15427 6.5 1.15427C8.1737 1.15427 9.52997 2.51054 9.52997 4.18424C9.52997 5.85794 8.1737 7.21421 6.5 7.21421Z"
                          fill="#004A91"
                        />
                      </svg>
                    </ActionBtn>

                  </ActionBtnsContainer>
                </StyledTableCell>
              </StyledTabledRow>
              ))
            }
            </StyledTabledBody>
          </StyledTable>
        )}
      </FormBodyContainer>
    </FormWrapper>
  )
}

export default FormBody
