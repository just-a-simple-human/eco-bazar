import React from "react";
import { Body } from "#common/common.style";
import CloseShoppingCartButton from "#svg/CloseShoppingCartButton";
import ProductInShoppingCart from "./components/Product/Product.jsx";
import ProductInShoppingCartDevider from "#svg/ProductInShoppingCartDevider";
import { CloseButton, ShoppingCartButton, ShoppingCartContainer, ShoppingCartHeadingContainer, ShoppingCartProducts, ShoppingCartSubtotal } from "./ShoppingCart.style";
import { useDispatch, useSelector } from "react-redux";
import { changeModalStatus, closeModal } from "#store/modalSlice.js";



function ShoppingCart () {
  const cart = useSelector(state => state.cart.products)
  
  const dispatch = useDispatch()

  const isClosing = useSelector(state => state.modal.modals["shoppingCart"])?.status

  return (
    <ShoppingCartContainer 
      onClick={(e) => e.stopPropagation()}
      onAnimationEnd={() => {
        if (isClosing === "closed") {
          dispatch(closeModal({name: "shoppingCart"}))
          dispatch(changeModalStatus({name: "shoppingCart", value: "none"}))
        }
      }}
      $isclosing={isClosing === "closed" ? "true" : null}
    >
      <ShoppingCartHeadingContainer>
        <Body.XL $medium="true">Shopping Cart</Body.XL>
        <CloseButton onClick={() => dispatch(changeModalStatus({name: "shoppingCart", value: "closed"}))}>
          <CloseShoppingCartButton />
        </CloseButton>
      </ShoppingCartHeadingContainer>
      <ShoppingCartProducts>
        {cart.length !== 0 &&
          cart.map((product, index) => {
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
        <Body.Medium>{cart.length} Products</Body.Medium>
        <Body.Medium $semibold="true">
          ${
            cart.length ? 
            cart.map(p => p.price * p.weight).reduce((acc, cur) => acc += cur).toFixed(2) : 
            "0.00"
          }
        </Body.Medium>
      </ShoppingCartSubtotal>
      <ShoppingCartButton
        to={cart.length > 0 ? "/shop" : null}
        onClick={() => {
          dispatch(changeModalStatus({name: "shoppingCart", value: "closed"}));
        }}
        $semibold="true"
      >
        Checkout
      </ShoppingCartButton>
      <ShoppingCartButton $semibold="true">Go To Cart</ShoppingCartButton>
    </ShoppingCartContainer>
  );
}

export default ShoppingCart;
