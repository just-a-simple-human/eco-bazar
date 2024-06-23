import React from "react"
import { CategoryCartContainer, CategoryCartInfo } from "./CategoryCart.style"
import { Body, StyledImg, colors } from "#common/common.style"

function CategoryCart({
    slideMovement,
    setSlideMovement,
    category
}) {
  return (
    <CategoryCartContainer
        $move={slideMovement}
        onAnimationEnd={() => setSlideMovement(null)}
    >
        <StyledImg src={category.icon} />
        <CategoryCartInfo>
        <Body.Large $medium="true">{category.name}</Body.Large>
        <Body.Small $textcolor={colors.grey[5]}>
            {category.productsCount} products
        </Body.Small>
        </CategoryCartInfo>
    </CategoryCartContainer>
  )
}

export default CategoryCart