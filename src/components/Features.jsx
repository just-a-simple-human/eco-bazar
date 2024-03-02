import React from 'react'
import styled from 'styled-components'
import { Body, StyledImg, colors } from '../default'

const FeaturesContainer = styled.section`

    width: 1400px;
    height: 128px;
    padding: 40px;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;


    position: absolute;
    right: 60px;
    bottom: -64px;

    background-color: ${colors.brandingColors.white};
    box-shadow: 0px 8px 40px 0px rgba(0, 38, 3, 0.08);

    animation: none 0s;

    & * {

        animation: none 0s;

    }

`

const Feature = styled.section`
    
    width: 306px;
    height: 48px;

    display: flex;
    align-items: center;
    gap: 16px;

`

const FeatureInfo = styled.div`
    
    width: 250px;
    
    display: flex;
    flex-direction: column;
    gap: 8px;

`



function Features({featuresList}) {
  return (
    <FeaturesContainer>
        {featuresList.map((element, index) => 
                <Feature key={index}>
                    <StyledImg src={element.icon}/>
                    <FeatureInfo>
                        <Body.Medium $textcolor={colors.grey[9]} $$semibold='true'>{element.title}</Body.Medium>
                        <Body.Small $textcolor={colors.grey[4]}>{element.description}</Body.Small>
                    </FeatureInfo>
                </Feature>
        )}
    </FeaturesContainer>
  )
}

export default Features