import React from 'react'
import styled from 'styled-components'
import { Body, Typography, colors } from '../../../default'

const SubscriptionFormContainer = styled.form`
  
  width: 535px;
  height: 52px;
  border-radius: 52px;

  display: flex;
  align-items: center;

  background: ${colors.brandingColors.white};
  border: 1px solid ${colors.grey[1]};

  transition: all .5s;

  &:has(:is(input:hover, input:focus)) {
    border: 1px solid ${colors.brandingColors.primary};
  }

`

const EMailInput = styled.input`
    
    width: 325px;
    height: 24px;
    margin-inline: 24px;

    ${Typography}
    color: ${colors.grey[5]};
    font-size: 16px;

    &::placeholder {

        ${Typography}
        color: ${colors.grey[5]};
        font-size: 16px;

    }

`

const SubscriptionButton = styled.button`
    
  width: 162px;
  height: 52px;
  border-radius: 52px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${colors.brandingColors.primary};

  transition: all .5s;
  &:hover {
    background: ${colors.brandingColors.hardPrimary};
  }

`

function SubscriptionForm() {
  return (
    <SubscriptionFormContainer>
        <EMailInput type='email' id='subscription-input' placeholder='Your email address'/>
        <SubscriptionButton type='submit' onClick={(e)=>{
            e.preventDefault()
        }}>
            <Body.Medium $textcolor={colors.brandingColors.white} $lineheight='20px' $semibold='true'>Subscribe</Body.Medium>
        </SubscriptionButton>
    </SubscriptionFormContainer>
  )
}

export default SubscriptionForm