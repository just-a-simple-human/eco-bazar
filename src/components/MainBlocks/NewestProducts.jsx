import React from 'react'
import styled from 'styled-components'
import { Body, Headings, colors } from '../../default'
import Line from '../../sprites/Line'
import { Link } from 'react-router-dom'
import ShopNowArrow from '../../sprites/ShopNowArrow'
import ProductCart from '../ProductCartMedium'
import { chaniseCabbage, corn, greenApple, greenChili, greenLettuce } from '../../pseudoFetch'

const NewestProductsContainer = styled.section`
    
    width: 1320px;
    height: 457px;
    margin-top: 100px;

`

const NewestProductsHeadingContainer = styled.div`
    
    height: 68px;

    display: flex;
    justify-content: space-between;
    align-items: center;

`

const NewestProductsHeading = styled.div`

    width: fit-content;
    
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: start;

`

const ViewAllButton = styled(Link)`
    
    width: 90px;
    height: 24px;

    display: flex;
    gap: 12px;
    align-items: center;
    
`

const ProductsContainer = styled.div`
    
    height: 339px;
    margin-top: 50px;

    display: flex;
    gap: 20px;

`

function NewestProducts() {

    let newestProductsList = [
        greenApple,
        chaniseCabbage,
        greenLettuce,
        greenChili,
        corn
    ]

    return (
        <NewestProductsContainer>
            
            <NewestProductsHeadingContainer>
                <NewestProductsHeading>
                    <Headings.Heading03 as={'h2'} $$semibold='true'>Newest Products</Headings.Heading03>
                    <Line/>
                </NewestProductsHeading>
                <ViewAllButton>
                    <Body.Medium $textcolor={colors.brandingColors.primary} $medium='true'>View All</Body.Medium>
                    <ShopNowArrow width='15' height='12.05' color={colors.brandingColors.primary}/>
                </ViewAllButton>
            </NewestProductsHeadingContainer>

            <ProductsContainer>
                {newestProductsList.map((element, index) => 
                    <ProductCart key={index} product={element}/>
                )}
            </ProductsContainer>

        </NewestProductsContainer>
    )
}

export default NewestProducts