import React from 'react'
import { Body } from "#common/common.style";
import { ProductСollectionContainer } from './ProductСollection.style'
import ProductCart from '#components/ProductCartSmall';

function ProductСollection({title, products}) {
  return (
    <ProductСollectionContainer>
        <Body.XL $medium="true">{title}</Body.XL>
        {
          products.map((product)=>
            <ProductCart key={product.id} product={product}/>
          )
        }
      </ProductСollectionContainer>
  )
}

export default ProductСollection