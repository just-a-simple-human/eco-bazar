import React from 'react'
import styled from 'styled-components'
import { Body, Headings, colors } from '../../default'
import ProductCart from '../ProductCartSmall'
import { bigPotatos, chaniseCabbage, corn, eggplant, freshCauliflower, greenApple, greenChili, greenCucumber, greenLettuce } from '../../pseudoFetch'
import BannerBackground from '../../images/Banner1.png'

const ProductCollectionsContainer = styled.section`
  
  width: 1320px;
  height: 426px;
  margin-top: 50px;

  display: flex;
  gap: 24px;

`

const ProductСollection = styled.div`
  
  width: 312px;
  height: 426px;

  display: flex;
  flex-direction: column;
  gap: 16px;

`

const Banner = styled.div`
  
  width: 312px;
  height: 432px;

  background-image: url(${BannerBackground});
  background-repeat: no-repeat;

`

const BannerInfo = styled.div`
  
  width: 248px;
  height: 119px;
  margin-top: 46.68px;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

`

const BannerHeading = styled.div`
  
  height: 58px;
  
  display: flex;
  flex-direction: column;
  gap: 8px;

`

function ProductСollections() {
  return (
    <ProductCollectionsContainer>
      <ProductСollection>
        <Body.XL $medium='true'>Hot Deals</Body.XL>
        <ProductCart product={greenApple}/>
        <ProductCart product={greenCucumber}/>
        <ProductCart product={greenLettuce}/>
      </ProductСollection>
      <ProductСollection>
        <Body.XL $medium='true'>Best Sellers</Body.XL>
        <ProductCart product={eggplant}/>
        <ProductCart product={greenChili}/>
        <ProductCart product={bigPotatos}/>
      </ProductСollection>
      <ProductСollection>
        <Body.XL $medium='true'>Top Rated</Body.XL>
        <ProductCart product={freshCauliflower}/>
        <ProductCart product={corn}/>
        <ProductCart product={chaniseCabbage}/>
      </ProductСollection>
      <Banner>
        <BannerInfo>
          <BannerHeading>
            <Body.Tiny $lspacing='0.36px' $lineheight='100%' $texttransform='uppercase' $textalign='center' $medium='true'>
              Summer Sale
            </Body.Tiny>
            <Headings.Heading05 $textcolor={colors.brandingColors.primary} $textalign='center' $semibold='true'>
              75% off
            </Headings.Heading05>
          </BannerHeading>
        </BannerInfo>
      </Banner>
    </ProductCollectionsContainer>
  )
}

export default ProductСollections