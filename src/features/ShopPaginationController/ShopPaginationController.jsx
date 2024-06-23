import React, { useCallback, useMemo } from "react";
import ControllerArrowLeft from "#svg/ControllerArrowLeft";
import ControllerArrowRight from "#svg/ControllerArrowRight";
import { ControllerContainer, ControllerNumbersContainer } from "./ShopPaginationController.style";
import ControllerButton from "./ControllerButton/ControllerButton";
import { useDispatch, useSelector } from "react-redux";

import { changeActivePage, changeMaxActivePage } from '#store/shopSlice.js';

function ShopPaginationController() {
  
  const activePage = useSelector(state => state.shop.activePage)
  const maxActivePage = useSelector(state => state.shop.maxActivePage)
  const filters = useSelector(state => state.shop.filters)
  const productsFound = useSelector(state => state.shop.productsFound)

  let maxPages = useMemo(() => {
    return Math.ceil(productsFound / filters.productsPerPage)
  }, [productsFound, filters.productsPerPage]);
  let middlePage = useMemo(() => {
    if (activePage < 4) return 4;
    else if (activePage > maxPages - 3) return maxPages - 3;
    else return activePage;
  }, [activePage, maxPages]);

  const dispatch = useDispatch()

  const changePage = useCallback((targetPage) => {
    dispatch(changeActivePage(targetPage))
    if (targetPage > maxActivePage) {
      dispatch(changeMaxActivePage(targetPage))
    }
  }, [dispatch, maxActivePage])

  function selectButtonText(i, maxPages, middlePage) {
    if (i === 0) return "1"
    if (i === 6) return maxPages
    if (((i === 1) && (middlePage > 4)) || ((i === 5) && (middlePage < maxPages - 3))) return "..."
    if (maxPages <= 7) return (i + 1)
    else return (middlePage + i - 3)
  }
  function getProductButtons(maxPages, middlePage) {
    const productButtons = []
    for (let i = 0; i < (maxPages > 7 ? 7 : maxPages); i++) {
      productButtons.push(
        <ControllerButton
            key={i + selectButtonText(i, maxPages, middlePage) + i}
            buttonText={selectButtonText(i, maxPages, middlePage)}
            changer={(e) => {
              changePage(parseInt(e.currentTarget.children[0].innerText));
            }}
            activePage={activePage}
        />
      )
    }
    return productButtons
  }

  return (
    <ControllerContainer>
      <ControllerButton
        disabled={activePage === 1}
        changer={() => changePage(activePage - 1)}
      >
        <ControllerArrowLeft />
      </ControllerButton>
      <ControllerNumbersContainer>
        {maxPages && middlePage && getProductButtons(maxPages, middlePage)}
      </ControllerNumbersContainer>
      <ControllerButton
        disabled={activePage === maxPages}
        changer={() => changePage(activePage + 1)}
      >
        <ControllerArrowRight />
      </ControllerButton>
    </ControllerContainer>
  );
}

export default ShopPaginationController;
