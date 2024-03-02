import React from 'react'
import styled from 'styled-components'
import { Body, StyledImg, colors } from '../default'
import AddToCartButton from './UI/buttons/AddToCartButton'
import AddToWishlistButton from './UI/buttons/AddToWishlistButton'
import QuickViewButton from './UI/buttons/QuickViewButton'
import { Link } from 'react-router-dom'


const ProductImg = styled(StyledImg)`

  width: 112px;
  height: 112px;
  padding: 5px;
  margin-bottom: 4px;

`

const ProductContainer = styled.section`
  
  width: 200px;
  height: 116px;
  padding-inline: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;

`

const SwipeContainer = styled.div`
  
  height: 46px;
  width: 200px;
  overflow: hidden;

`

const ProductInfo = styled.div`
  
  width: 80px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 6px;

  transition: all .5s;

`

const ProductRaiting = styled.div`
  
  width: 80px;
  height: 16px;

`

const ProductButtons = styled.div`
  
  width: 144px;
  height: 40px;
  margin-top: 6px;

  display: flex;
  gap: 12px;

  transition: all .5s;

`
const StyledProductCart = styled.div`

  width: 312px;
  height: 116px;
  border-radius: 6px;

  display: flex;

  border: 1px solid ${colors.grey[1]};

  transition: all .5s;
  &:hover {

      border: 1px solid ${colors.brandingColors.hardPrimary};
      box-shadow: 0px 0px 12px 0px rgba(32, 181, 38, 0.32);

      & ${Body.Small} {

        color: ${colors.brandingColors.hardPrimary};

      }

      & :is(${ProductInfo}, ${ProductButtons}) {
        
        transform: translateY(-46px);

      }

  }

`

function ProductCart({product}) {
  return (
    <StyledProductCart>
      <Link to={`product-${product.id}`}><ProductImg src={product.img}/></Link>
      <ProductContainer>
        <Body.Small as={Link} to={`product-${product.id}`} $textcolor={colors.grey[7]}>{product.name}</Body.Small>
        <SwipeContainer>
          <ProductInfo>
            <Body.Medium $medium='true'>${product.cost}</Body.Medium>
            <ProductRaiting>
              {(product.showRaiting('16'))}
            </ProductRaiting>
          </ProductInfo>
          <ProductButtons>
            <AddToCartButton product={product}/>
            <AddToWishlistButton/>
            <QuickViewButton/>
          </ProductButtons>
        </SwipeContainer>
      </ProductContainer>
    </StyledProductCart>
  )
}

export default ProductCart