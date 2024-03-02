import React from 'react'
import styled from 'styled-components'
import { Body, StyledImg, colors } from '../default'
import { Link } from 'react-router-dom'
import AddToCartButton, { StyledAddToCartButton } from './UI/buttons/AddToCartButton'
import QuickViewButton, { StyledQuickViewButton } from './UI/buttons/QuickViewButton'
import AddToWishlistButton, { StyledAddToWishlistButton } from './UI/buttons/AddToWishlistButton'

const ProductCartContainer = styled.section`

    width: 248px;
    height: 339px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    position: relative;

    border: 1px solid ${colors.grey[1]};

    transition: all .25s;

    &:hover {

        border: 1px solid ${colors.brandingColors.hardPrimary};
        box-shadow: 0px 0px 12px 0px rgba(32, 181, 38, 0.32);

        & ${StyledAddToWishlistButton},
        & ${StyledQuickViewButton} {

        display: flex;

        }

        & ${Body.Small} {

            color: ${colors.brandingColors.hardPrimary};

        }

    }

    & ${StyledAddToWishlistButton} {

        position: absolute;
        top: 15px;
        right: 16px;

    }

    & ${StyledQuickViewButton} {

        position: absolute;
        top: 61px;
        right: 16px;

    }

    & ${StyledAddToWishlistButton},
    & ${StyledQuickViewButton} {

        display: none;

    }

    & ${Body.Small} {

        transition: all .5s;

    }

`

const ProductImg = styled(StyledImg)`
    
    width: 246px;
    height: 246px;
    padding: 1px;

`

const ProductInfo = styled.div`
    
    height: 91px;
    padding: 16px;
    padding-top: 12px;

    position: relative;

    & ${StyledAddToCartButton} {

        position: absolute;
        top: 25.5px;
        right: 16px;

    }

`

const ProductRating = styled.div`
    
    width: 60px;
    height: 12px;
    margin-top: 6px;
    
`

function ProductCart({product}) {

    return (
        <ProductCartContainer>
            <AddToWishlistButton/>
            <QuickViewButton/>
            <Link to={`shop/product-${product.id}`}><ProductImg src={product.img}/></Link>
            <ProductInfo>
                <Body.Small as={Link} to={`shop/product-${product.id}`} $textcolor={colors.grey[7]}>{product.name}</Body.Small>
                <Body.Medium $medium='true'>${product.cost}</Body.Medium>
                <ProductRating>
                    {(product.showRaiting())}
                </ProductRating>
                <AddToCartButton product={product}/>
            </ProductInfo>
        </ProductCartContainer>
    )
}

export default ProductCart


