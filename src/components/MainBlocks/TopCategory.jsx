import React from 'react'
import styled from 'styled-components'
import { Headings } from '../../default'
import Line from '../../sprites/Line'
import CategorySlider from '../CategorySlider'
import { fish, freshFruit, meat, snacks, softDrinks, vegetables } from '../../pseudoFetch'

const StyledTopCategory = styled.section`
    
    height: 328px;
    margin-top: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

`

const TopCategoryHeading = styled.div`
    
    width: 277px;
    height: 68px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    

`

function TopCategory() {
    let categories = [
        vegetables,
        freshFruit,
        fish,
        meat,
        softDrinks,
        snacks
    ]
    return (
        <StyledTopCategory>
            <TopCategoryHeading>
                <Headings.Heading03 as={'h2'} $$semibold='true'>Top Category</Headings.Heading03>
                <Line/>
            </TopCategoryHeading>
            <CategorySlider categories={categories}/>
        </StyledTopCategory>
    )
}

export default TopCategory