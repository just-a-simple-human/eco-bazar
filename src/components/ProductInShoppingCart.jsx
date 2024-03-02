import React, { useContext, useState } from 'react'
import styled, { css } from 'styled-components'
import { Body, DifferentText, StyledImg, colors } from '../default'
import DeleteProductButtonImg from '../sprites/DeleteProductButton'
import { MainContext } from '../context'
import { deleted } from '../animations/ShoppingCartAnimation'

const ProductContainer = styled.section`
    
    height: 100px;

    display: flex;
    gap: 8px;
    align-items: center;

    ${props => props.$clicked && css`animation: ${deleted} 1s forwards;`}

`

const ProductImg = styled(StyledImg)`
    
    width: 120px;
    height: 100px;

    object-fit: contain;

`

const ProductInfo = styled.div`
    
    height: 44px;

    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;

`

const DeleteProductButton = styled.button`

    & path {
        transition: all .5s;
    }
    &:hover {
        & path:first-child {
            stroke: ${colors.grey[5]};
        }
        & path:not(:first-child) {
            stroke: ${colors.grey[9]};
        }
    }

    background: transparent;
`

function ProductInShoppingCart({product}) {

    let {cart} = useContext(MainContext)
    let [$isclicked, setIs$clicked] = useState(false)
    
    return (
        <ProductContainer $clicked={$isclicked} onAnimationEnd={()=>{
            setIs$clicked(false)
            cart.deleteFromCart(product)
            }}>
            <ProductImg src={product.img}/>
            <ProductInfo>
                <Body.Small>{product.name}</Body.Small>
                <Body.Small $textcolor={colors.grey[5]}>{product.weight}kg &times; <DifferentText $semibold='true'>${product.cost}</DifferentText></Body.Small>
            </ProductInfo>
            <DeleteProductButton onClick={() => setIs$clicked(true)}>
                <DeleteProductButtonImg></DeleteProductButtonImg>
            </DeleteProductButton>
        </ProductContainer>
    )
}

export default ProductInShoppingCart