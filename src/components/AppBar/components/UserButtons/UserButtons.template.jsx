import React, { useContext } from "react";
import { StyledImg } from "#common/common.style";
import bigDevider from "#images/BigDevider.svg";
import Heart from "#svg/WishListHeart";
import CartImg from "#svg/CartImg";
import { MainContext } from "#context";
import { CartButton, 
  CartButtonContainer, 
  ItemCounter, 
  TotalCostContainer, 
  TotalCostText, 
  TotalCountValue, 
  UserButtonsContainer, 
  WishListButton 
} from "./UserButtons.style";

function UserButtons() {
  const { openShoppingCart, cart } = useContext(MainContext);

  return (
    <UserButtonsContainer>
      <WishListButton>
        <Heart />
      </WishListButton>

      <StyledImg src={bigDevider}></StyledImg>

      <CartButtonContainer>
        <CartButton onClick={openShoppingCart}>
          <CartImg />

          <ItemCounter>{cart.getTotalCount()}</ItemCounter>
        </CartButton>
        <TotalCostContainer>
          <TotalCostText>Shopping cart:</TotalCostText>
          <TotalCountValue>${cart.getTotalCost()}</TotalCountValue>
        </TotalCostContainer>
      </CartButtonContainer>
    </UserButtonsContainer>
  );
}

export default UserButtons;
