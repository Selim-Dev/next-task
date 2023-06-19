import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import StyledButton from './../common/StyledButton'
import EditIcon from '../icons/edit-icon'
import ViewIcon from '../icons/view-icon'
import DownloadIcon from '../icons/download-icon'
import { useRouter } from 'next/navigation'

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
  border-collapse: collapse;
`

const StyledTabledHead = styled.thead`
  background-color: #004a91;
  color: #fff;
`
const StyledTabledBody = styled.tbody`
  color: #004a91;
`

const StyledTabledRow = styled.tr`
`
const StyledTableCell = styled.td`
  padding: 16px 30px;
  float: ${(props) => props.float || 'initial'};
`

const StyledStatusCell = styled.span`
  padding: 3px 6px;
  background-color: #ededef;
  color: ${(props) => props.color || '#FFC107'};
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

function FormBody({ forms }) {
  const [status, setStatus] = React.useState('approved')
  const [filteredData, setFilteredData] = React.useState([])

  const router = useRouter()

  const handleStatusChange = (val) => {
    setStatus(val)
  }

  const statusColor = (status) => {
    if (status == 'pending') {
      return '#1FE08F'
    } else {
      return '#FFC107'
    }
  }

  useEffect(() => {
    const newData = forms.filter(({ type }) => type == status)
    setFilteredData(newData)
  }, [forms, status])

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
              {filteredData?.map(
                ({ id, name, title, createdAt, custodianDetails }) => (
                  <StyledTabledRow key={id} style={{
                    borderBottom:"1px solid #F4F4F5"
                  }}>
                    <StyledTableCell>{id}</StyledTableCell>
                    <StyledTableCell>{title}</StyledTableCell>
                    <StyledTableCell>{createdAt}</StyledTableCell>
                    <StyledTableCell float="right">
                      <ActionBtnsContainer>
                        <ActionBtn bg="#004A91">
                          <EditIcon onClick={()=>router.push("/CustodianForm")} />
                        </ActionBtn>

                        <ActionBtn bg="#fff">
                          <ViewIcon />
                        </ActionBtn>

                        <ActionBtn bg="#DCAC00">
                          <DownloadIcon />
                        </ActionBtn>
                      </ActionBtnsContainer>
                    </StyledTableCell>
                  </StyledTabledRow>
                )
              )}
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
              {filteredData.map(({ id, title, createdAt, status }) => (
                <StyledTabledRow key={id} style={{
                  borderBottom:"1px solid #F4F4F5"
                }}>
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
                        <EditIcon onClick={()=>router.push("/CustodianForm")} />
                      </ActionBtn>

                      <ActionBtn bg="#fff">
                        <ViewIcon />
                      </ActionBtn>
                    </ActionBtnsContainer>
                  </StyledTableCell>
                </StyledTabledRow>
              ))}
            </StyledTabledBody>
          </StyledTable>
        )}
      </FormBodyContainer>
    </FormWrapper>
  )
}

export default FormBody
