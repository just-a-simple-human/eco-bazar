import React from "react";
import { StyledImg } from "#common/common.style";
import bigDevider from "#images/BigDevider.svg";
import Heart from "#svg/WishListHeart";
import CartImg from "#svg/CartImg";
import { CartButton, 
  CartButtonContainer, 
  ItemCounter, 
  TotalCostContainer, 
  TotalCostText, 
  TotalCountValue, 
  UserButtonsContainer, 
  WishListButton 
} from "./UserButtons.style";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "#store/modalSlice.js";

function UserButtons() {

  const cart = useSelector(state => state.cart.products)

  const dispatch = useDispatch()

  return (
    <UserButtonsContainer>
      <WishListButton>
        <Heart />
      </WishListButton>

      <StyledImg src={bigDevider}></StyledImg>

      <CartButtonContainer>
        <CartButton onClick={() => {dispatch(openModal({name: "shoppingCart"}))}}>
          <CartImg />

          <ItemCounter>{cart.length}</ItemCounter>
        </CartButton>
        <TotalCostContainer>
          <TotalCostText>Shopping cart:</TotalCostText>
          <TotalCountValue>
            ${
              cart.length ? 
              cart.map(p => p.price * p.weight).reduce((acc, cur) => acc += cur).toFixed(2) : 
              "0.00"
            }
          </TotalCountValue>
        </TotalCostContainer>
      </CartButtonContainer>
    </UserButtonsContainer>
  );
}

export default UserButtons;
