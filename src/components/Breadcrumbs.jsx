import React from 'react'
import styled from 'styled-components'
import BackgroungImg from '../images/Breadcrumbs.png'
import HomeImg from '../images/Home.svg'
import { StyledImg, Typography, colors } from '../default'
import { Link } from 'react-router-dom'
import BreadcrumbsArrow from '../sprites/BreadcrumbsArrow'

const BreadcrumbsContainer = styled.section`

    width: 100vw;
    height: 120px;
    padding-inline: calc((100vw - 1320px)/2);

    display: flex;
    align-items: center;

    background-image: url(${BackgroungImg});

`

const Location = styled.nav`
    
    width: fit-content;
    height: 24px;

    display: flex;
    align-items: center;
    gap: 12px;

`

const BreadcrumbContainer = styled.div`
    
    width: fit-content;
    height: fit-content;

    display: flex;
    gap: 12px;

`

const Breadcrumb = styled(Link)`

    ${Typography}
    font-size: 16px;

`

function Breadcrumbs({breadcrumbWay}) {
  return (
    <BreadcrumbsContainer>
        <Location>
            <Breadcrumb to={`/`}><StyledImg src={HomeImg}/></Breadcrumb>
            {breadcrumbWay.map((element, index) =>
                <BreadcrumbContainer key={Math.random()}>
                    <BreadcrumbsArrow/>
                    <Breadcrumb $textcolor={index === (-0) ? colors.brandingColors.primary : colors.grey[4]} >{element}</Breadcrumb>
                </BreadcrumbContainer>
            )}
        </Location>
    </BreadcrumbsContainer>
  )
}

export default Breadcrumbs