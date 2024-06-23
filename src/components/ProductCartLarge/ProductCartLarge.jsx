import React from "react";
import { Body, StyledImg, colors } from "#common/common.style";
import { Link } from "react-router-dom";
import Button from "#components/ui/buttons/Button/Button.jsx";
import { ProductCartContainer, ProductImg, ProductInfo, ProductRating } from "./ProductCartLarge.style";
import Rating from "#components/Rating/Rating.jsx";
import { useDispatch } from "react-redux";
import { addProduct } from "#store/cartSlice.js";
import Heart from "#svg/Heart.jsx";
import Eye from "#svg/Eye.jsx";
import Bag from "#svg/Bag.jsx";

function ProductCartLarge({ product }) {
  const dispatch = useDispatch()
  return (
    <ProductCartContainer>
      <Button mainFunction={() => {}}>
        <Heart/>
      </Button>
      <Button mainFunction={() => {}}>
        <Eye/>
      </Button>
      <ProductImg to={`/products/product-${product.id}`}>
        <StyledImg src={require('#mock/products/images/' + product.img + '.webp')} />
      </ProductImg>
      <ProductInfo>
        <Body.Small
          as={Link}
          to={`/products/product-${product.id}`}
          $textcolor={colors.grey[7]}
        >
          {product.name}
        </Body.Small>
        <Body.Medium $medium="true">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </Body.Medium>
        <ProductRating>
          <Rating rating={product.rating} size={12}/>
        </ProductRating>
        <Button mainFunction={() => {dispatch(addProduct(product))}}>
          <Bag/>
        </Button>
      </ProductInfo>
    </ProductCartContainer>
  );
}

export default ProductCartLarge;
