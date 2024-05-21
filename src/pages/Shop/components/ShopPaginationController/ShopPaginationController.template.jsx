import React, { useCallback, useContext, useEffect, useState } from "react";
import ControllerArrowLeft from "#svg/ControllerArrowLeft";
import ControllerArrowRight from "#svg/ControllerArrowRight";
import { ShopContext } from "#context";
import { ControllerContainer, ControllerNumbersContainer } from "./ShopPaginationController.style";
import ControllerButton from "./ControllerButton/ControllerButton.template";

function ShopPaginationController() {
  let { activeFilters, productsFound, fetchProducts, activePage, setActivePage, maxActivePage, setMaxActivePage, products } =
    useContext(ShopContext);
  let [maxPages, setMaxPages] = useState();
  let [middlePage, setMiddlePage] = useState(4);

  const changeActivePage = useCallback(
    (clickedPageNumber) => {
      setActivePage(clickedPageNumber);

      if (maxActivePage < clickedPageNumber) {
        fetchProducts(
          Math.ceil(clickedPageNumber * activeFilters.productsPerPage),
          activeFilters,
          products
        );
      }
      if (clickedPageNumber > maxActivePage) {
        setMaxActivePage(clickedPageNumber);
      }
    },
    [activeFilters, maxActivePage, setMaxActivePage, setActivePage, fetchProducts, products],
  );

  const changeMiddlePage = useCallback(
    (activePage) => {
      if (activePage <= 3) setMiddlePage(4);
      else if (activePage >= maxPages - 2) setMiddlePage(maxPages - 3);
      else setMiddlePage(activePage);
    },
    [maxPages],
  );

  useEffect(() => {
    setMaxPages(Math.ceil(productsFound / activeFilters.productsPerPage));
  }, [productsFound, activeFilters, setMaxPages]);

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
              changeActivePage(parseInt(e.currentTarget.children[0].innerText));
            }}
            activePage={activePage}
        />
      )
    }
    return productButtons
  }

  useEffect(()=>{
    if (activeFilters.productsPerPage === 8) {
      setActivePage((prev) => prev * 2 - 1);
    }
    if (activeFilters.productsPerPage === 16) {
      setActivePage((prev) => {
        if (prev !== 1) return Math.floor(prev / 2);
        else return prev;
      });
    }
  }, [activeFilters, setActivePage])

  useEffect(() => {
    changeMiddlePage(activePage);
  }, [activePage, changeMiddlePage]);

  return (
    <ControllerContainer>
      <ControllerButton
        disabled={activePage === 1}
        changer={() => changeActivePage(activePage - 1)}
      >
        <ControllerArrowLeft />
      </ControllerButton>
      <ControllerNumbersContainer>
        {maxPages && middlePage && getProductButtons(maxPages, middlePage)}
      </ControllerNumbersContainer>
      <ControllerButton
        disabled={activePage === maxPages}
        changer={() => changeActivePage(activePage + 1)}
      >
        <ControllerArrowRight />
      </ControllerButton>
    </ControllerContainer>
  );
}

export default ShopPaginationController;
