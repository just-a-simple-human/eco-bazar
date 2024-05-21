import React, { useContext, useState } from "react";
import { Body, DifferentText, colors } from "#common/common.style";
import DeleteProductButtonImg from "#svg/DeleteProductButton";
import { MainContext } from "#context";
import { DeleteProductButton, ProductContainer, ProductImg, ProductInfo } from "./Product.style";

function ProductInShoppingCart({ product }) {
  let { cart } = useContext(MainContext);
  let [isClicked, setIsClicked] = useState(false);

  return (
    <ProductContainer
      key={product.id}
      $clicked={isClicked}
      onAnimationEnd={() => {
        setIsClicked(false);
        cart.deleteFromCart(product);
      }}
    >
      <ProductImg src={product.img} />
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
