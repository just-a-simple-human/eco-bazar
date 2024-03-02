import React from 'react'
import { Headings } from '../../default'
import styled from 'styled-components'
import Line from '../../sprites/Line'
import ProductCart from '../ProductCartMedium'
import { chaniseCabbage, corn, greenApple, greenChili, greenLettuce } from '../../pseudoFetch'
import ProductСollections from './ProductСollections'

const FeaturedProductsMainContainer = styled.section`

    margin-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const FeaturedProductsHeadingContainer = styled.div`
    
    width: 374px;
    height: 68px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

`

const FeaturedProductsContainer = styled.div`
    
    width: 1320px;
    height: 339px;
    margin-top: 50px;

    display: flex;
    gap: 20px;

`

function FeaturedProducts() {

    const featuredProducts = [
        greenApple,
        chaniseCabbage,
        greenLettuce,
        greenChili,
        corn
    ]

    return (
        <FeaturedProductsMainContainer>
            <FeaturedProductsHeadingContainer>
                <Headings.Heading03 as={'h2'} $semibold='true'>Featured Products</Headings.Heading03>
                <Line/>
            </FeaturedProductsHeadingContainer>

            <FeaturedProductsContainer>
                {featuredProducts.map((element, index) => 
                    <ProductCart key={index} product={element}/>
                )}
            </FeaturedProductsContainer>
            <ProductСollections/>
        </FeaturedProductsMainContainer>
    )
}

export default FeaturedProducts