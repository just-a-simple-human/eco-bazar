import React, { useState } from "react";
import { Body, DifferentText, colors } from "#common/common.style";
import DeleteProductButtonImg from "#svg/DeleteProductButton";
import { DeleteProductButton, ProductContainer, ProductImg, ProductInfo } from "./Product.style";
import { useDispatch } from "react-redux";
import { deleteProduct } from "#store/cartSlice.js";

function ProductInShoppingCart({ product }) {
  let [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch()

  return (
    <ProductContainer
      key={product.id}
      $clicked={isClicked}
      onAnimationEnd={() => {
        dispatch(deleteProduct(product))
        setIsClicked(false);
      }}
    >
      <ProductImg src={require('#mock/products/images/' + product.img + '.webp')} />
      <ProductInfo>
        <Body.Small>{product.name}</Body.Small>
        <Body.Small $textcolor={colors.grey[5]}>
          {product.weight}kg &times;{" "}
          <DifferentText $semibold="true">${product.price}</DifferentText>
        </Body.Small>
      </ProductInfo>
      <DeleteProductButton onClick={() => setIsClicked(true)}>
        <DeleteProductButtonImg />
      </DeleteProductButton>
    </ProductContainer>
  );
}

export default ProductInShoppingCart;
