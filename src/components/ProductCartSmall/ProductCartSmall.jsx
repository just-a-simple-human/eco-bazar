import React from "react";
import { Body, colors } from "#common/common.style";
import Button from "#components/ui/buttons/Button/Button.jsx";
import { Link } from "react-router-dom";
import { ProductButtons, ProductCartContainer, ProductContainer, ProductImg, ProductInfo, ProductRating, SwipeContainer } from "./ProductCartSmall.style";
import Rating from "#components/Rating/Rating.jsx";
import { useDispatch } from "react-redux";
import { addProduct } from "#store/cartSlice.js";
import Heart from "#svg/Heart.jsx";
import Eye from "#svg/Eye.jsx";
import Bag from "#svg/Bag.jsx";

function ProductCart({ product }) {
  const dispatch = useDispatch()
  return (
    <ProductCartContainer>
      <Link to={`product-${product.id}`}>
        <ProductImg src={require('#mock/products/images/' + product.img + '.webp')} />
      </Link>
      <ProductContainer>
        <Body.Small
          as={Link}
          to={`product-${product.id}`}
          $textcolor={colors.grey[7]}
        >
          {product.name}
        </Body.Small>
        <SwipeContainer>
          <ProductInfo>
            <Body.Medium $medium="true">${product.price}</Body.Medium>
            <ProductRating>
              <Rating rating={product.rating} size={12}/>
            </ProductRating>
          </ProductInfo>
          <ProductButtons>
            <Button mainFunction={() => {dispatch(addProduct(product))}}>
              <Bag/>
            </Button>
            <Button mainFunction={() => {}}>
              <Eye/>
            </Button>
            <Button mainFunction={() => {}}>
              <Heart />
            </Button>
          </ProductButtons>
        </SwipeContainer>
      </ProductContainer>
    </ProductCartContainer>
  );
}

export default ProductCart;
