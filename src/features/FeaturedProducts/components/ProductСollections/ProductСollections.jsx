import React, { useEffect, useState } from "react";
import { Body, Headings, colors } from "#common/common.style";
import ProductApi from "#mock/products/products";
import { Banner, BannerHeading, BannerInfo, ProductCollectionsContainer } from "./ProductСollections.style";
import ProductСollection from "./components/ProductСollection/ProductСollection"

function ProductСollections() {

  
  let [hotDealsProducts, setHotDealsProducts] = useState([])
  let [bestSellersProducts, setBestSellersProducts] = useState([])
  let [topRatedProducts, setTopRatedProducts] = useState([])

  useEffect(()=>{
    setHotDealsProducts(new ProductApi().getProducts(0, 3))
    setBestSellersProducts(new ProductApi().getProducts(3, 3))
    setTopRatedProducts(new ProductApi().getProducts(6, 3))
  }, [])

  return (
    <ProductCollectionsContainer>
      <ProductСollection title={"Hot Deals"} products={hotDealsProducts}/>
      <ProductСollection title={"Best Sellers"} products={bestSellersProducts}/>
      <ProductСollection title={"Top Rated"} products={topRatedProducts}/>
      <Banner>
        <BannerInfo>
          <BannerHeading>
            <Body.Tiny
              $lspacing="0.36px"
              $lineheight="100%"
              $texttransform="uppercase"
              $textalign="center"
              $medium="true"
            >
              Summer Sale
            </Body.Tiny>
            <Headings.Heading05
              $textcolor={colors.brandingColors.primary}
              $textalign="center"
              $semibold="true"
            >
              75% off
            </Headings.Heading05>
          </BannerHeading>
        </BannerInfo>
      </Banner>
    </ProductCollectionsContainer>
  );
}

export default ProductСollections;
