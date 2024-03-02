import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { Body, Typography, colors } from '../../default'
import { closing, openning } from '../../animations/ShoppingCartAnimation'
import { MainContext } from '../../context'
import CloseShoppingCartButton from '../../sprites/CloseShoppingCartButton'
import { Link } from 'react-router-dom'
import ProductInShoppingCart from '../ProductInShoppingCart'
import ProductInShoppingCartDevider from '../../sprites/ProductInShoppingCartDevider'

const StyledShoppingCart = styled.dialog`
    &[open] {

        min-height: 100vh;
        overflow-x: hidden;
        
        position: fixed;
        left: auto;
        top: 0;
        z-index: 1;
        
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);

        animation-name: ${props => props.$isclosing ? closing : openning};
        animation-duration: .5s;
        animation-fill-mode: forwards;

        &::backdrop {
            background: rgba(0, 0, 0, 0.7);
        }
        
    }
`

const ShoppingCartContainer = styled.div`
    
    min-width: 456px;
    min-height: inherit;
    padding: 40px;

    display: flex;
    flex-direction: column;

    background-color: ${colors.brandingColors.white};

`

const ShoppingCartHeadingContainer = styled.div`
    
    width: 100%;
    height: 45px;

    display: flex;
    justify-content: space-between;
    align-items: center;

`

const CloseButton = styled.button`
    
    width: 45px;
    height: 45px;

    background-color: transparent;
    cursor: pointer;

    & * {

        transition: all .5s;

    }

    &:hover {

        & circle {

            fill: ${colors.brandingColors.primary};

        }

        & path {

            stroke: ${colors.brandingColors.white};

        }

    }

`

const ShoppingCartProducts = styled.div`
    
    width: 100%;
    margin-top: 12px;

    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 12px;

    background-color: transparent;

`

const ShoppingCartSubtotal = styled.div`

    width: 100%;
    height: 72px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const ShoppingCartButton = styled(Link)`
    
    width: 376px;
    height: 51px;
    border-radius: 43px;

    display: flex;
    justify-content: center;
    align-items: center;

    ${Typography}
    font-size: 16px;

    transition: all .5s;

    &:not(:nth-of-type(1)) {

        margin-top: 12px;

    }

    background-color: ${colors.brandingColors.primary};
    color: ${colors.brandingColors.white};

    &:hover {

        background-color: ${colors.brandingColors.hardPrimary};

    }

    &:last-child {

        background-color: rgba(86, 172, 89, 0.10);
        color: ${colors.brandingColors.primary};

        &:hover {

        background-color: rgba(44, 116, 47, 0.20);
        color: ${colors.brandingColors.hardPrimary};

    }
        
    }

`

const ShoppingCart = forwardRef(({...props},  ref) => {

    let {isShoppingCartClosing, setIsShoppingCartClosing, cart} = useContext(MainContext)

    return (
            <StyledShoppingCart
                onClick={() => {setIsShoppingCartClosing(true)}}
                onAnimationEnd={() => {if (isShoppingCartClosing) ref.current.close()}}
                $isclosing={isShoppingCartClosing ? 'true' : null}
                ref={ref}
            >
                <ShoppingCartContainer onClick={(e) => e.stopPropagation()}>
                    <ShoppingCartHeadingContainer>
                        <Body.XL $medium='true'>Shopping Cart</Body.XL>
                        <CloseButton onClick={() => setIsShoppingCartClosing(true)}>
                            <CloseShoppingCartButton/>
                        </CloseButton>
                    </ShoppingCartHeadingContainer>
                    <ShoppingCartProducts>
                        {(cart.getTotalCount() !== 0) && (cart.products.map((product, index) => {
                            if (index===0) return <ProductInShoppingCart key={product.id} product={product}/>
                            else {
                                return <><ProductInShoppingCartDevider/><ProductInShoppingCart key={product.id} product={product}/></>
                            }
                        }))}
                    </ShoppingCartProducts>
                    <ShoppingCartSubtotal>
                        <Body.Medium>{cart.getTotalCount()} Products</Body.Medium>
                        <Body.Medium $semibold='true'>${cart.getTotalCost()}</Body.Medium>
                    </ShoppingCartSubtotal>
                    <ShoppingCartButton to={cart.getTotalCount() > 0 ? '/shop' : null} onClick={() => {setIsShoppingCartClosing(true)}} $semibold='true'>Checkout</ShoppingCartButton>
                    <ShoppingCartButton $semibold='true'>Go To Cart</ShoppingCartButton>
                </ShoppingCartContainer>
            </StyledShoppingCart>
    )

})

export default ShoppingCart