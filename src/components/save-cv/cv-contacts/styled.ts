import styled from "styled-components"
import {MdEmail} from 'react-icons/md'
import {FaPhoneAlt} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'

export const CvContentStyled = styled.div`
  width: 320px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
` 
export const UnderLineStyled = styled.div`
  border: 1px solid gray;
  width: 100%;
  height: 1;
`
export const CvLeftSideStyled = styled.div``
export const DescriptionTitleStyled = styled.h5``
export const DescriptionStyled = styled.div`
  margin: 5px 0 20px;
  font-size: 13px;
  max-width: 150px;
  `

/* ------ICONS-SIZE----------------------------------------------------------- */


export const CvRightSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`
export const RightContentStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`
export const EmailIconStyled = styled(MdEmail)`
  width: 15px;
  height: 15px;
`
export const RightTextStyled = styled.div`
  color: black;
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
`
export const PhoneIconStyled = styled(FaPhoneAlt)`
  width: 15px;
  height: 15px;
`
export const LocationIconStyled = styled(ImLocation2)`
  width: 15px;
  height: 15px;
`
export const LineBlockStyled = styled.div`
  margin-top: 10px;
`