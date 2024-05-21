import React, { forwardRef, useContext } from "react";
import { Body } from "#common/common.style";
import { MainContext } from "#context";
import CloseShoppingCartButton from "#svg/CloseShoppingCartButton";
import ProductInShoppingCart from "./components/Product/Product.template";
import ProductInShoppingCartDevider from "#svg/ProductInShoppingCartDevider";
import { CloseButton, ShoppingCartButton, ShoppingCartContainer, ShoppingCartHeadingContainer, ShoppingCartProducts, ShoppingCartSubtotal, StyledShoppingCart } from "./ShoppingCart.style";



const ShoppingCart = forwardRef((props, ref) => {
  let { isShoppingCartClosing, setIsShoppingCartClosing, cart } =
    useContext(MainContext);

  return (
    <StyledShoppingCart
      onClick={() => {
        setIsShoppingCartClosing(true);
      }}
      onAnimationEnd={() => {
        if (isShoppingCartClosing) ref.current.close();
      }}
      $isclosing={isShoppingCartClosing ? "true" : null}
      ref={ref}
    >
      <ShoppingCartContainer onClick={(e) => e.stopPropagation()}>
        <ShoppingCartHeadingContainer>
          <Body.XL $medium="true">Shopping Cart</Body.XL>
          <CloseButton onClick={() => setIsShoppingCartClosing(true)}>
            <CloseShoppingCartButton />
          </CloseButton>
        </ShoppingCartHeadingContainer>
        <ShoppingCartProducts>
          {cart.getTotalCount() !== 0 &&
            cart.products.map((product, index) => {
              if (index === 0)
                return (
                  <ProductInShoppingCart key={product.id} product={product} />
                );
              else {
                return (
                  <div key={product.id} style={{ display: "contents" }}>
                    <ProductInShoppingCartDevider />
                    <ProductInShoppingCart product={product} />
                  </div>
                );
              }
            })}
        </ShoppingCartProducts>
        <ShoppingCartSubtotal>
          <Body.Medium>{cart.getTotalCount()} Products</Body.Medium>
          <Body.Medium $semibold="true">${cart.getTotalCost()}</Body.Medium>
        </ShoppingCartSubtotal>
        <ShoppingCartButton
          to={cart.getTotalCount() > 0 ? "/shop" : null}
          onClick={() => {
            setIsShoppingCartClosing(true);
          }}
          $semibold="true"
        >
          Checkout
        </ShoppingCartButton>
        <ShoppingCartButton $semibold="true">Go To Cart</ShoppingCartButton>
      </ShoppingCartContainer>
    </StyledShoppingCart>
  );
});

export default ShoppingCart;
