import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "#pages/Home/Home";
import Shop from "#pages/Shop/Shop";
import NotFound from "#pages/NotFound/NotFound";
import AppBar from "#components/AppBar";
import AppFooter from "#components/AppFooter";
import { MainContext } from "#context";
import styled from "styled-components";
import { colors } from "#common/common.style";
import "overlayscrollbars/overlayscrollbars.css";
import { useOverlayScrollbars } from "overlayscrollbars-react";
import ShoppingCart from "#components/ShoppingCart";

const AppWrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  position: relative;

  & .os-scrollbar-vertical {
    box-sizing: content-box;
    right: 0;
    min-width: 17.5px;
    max-width: 17.5px;
    & > .os-scrollbar-track {
      & > .os-scrollbar-handle {
        min-height: 190px;
        max-height: auto;
        width: 17.5px;
        background: ${colors.brandingColors.primary};
        opacity: 0.8;
      }
    }
  }
`;

function App() {
  let [isLogined, setIsLogined] = useState(false);
  let [language, setLanguage] = useState("Eng");
  let [currency, setCurrency] = useState("USD");

  let [cart, setCart] = useState({
    products: [],

    getTotalCount() {
      return this.products.length;
    },
    getTotalCost() {
      if (this.getTotalCount() === 0) return (0.0).toFixed(2);
      return this.products
        .map((element) => element.price * element.weight)
        .reduce((acc, cur) => (acc += cur))
        .toFixed(2);
    },
    addToCart(product) {
      if (!this.products.includes(product)) {
        product.weight = 1
        setCart({ ...cart, products: [...this.products, product] });
      } else {
        setCart({
          ...cart,
          products: [
            ...this.products.map((element) => {
              if (element === product) {
                element.weight += 1;
              }
              return element;
            }),
          ],
        });
      }
    },
    deleteFromCart(product) {
      setCart({
        ...cart,
        products: [
          ...this.products
            .map((element) => {
              if (element === product) {
                element.weight = 1;
              }
              return element;
            })
            .filter((element) => element !== product),
        ],
      });
    },
  });

  const cartRef = useRef();
  let [isShoppingCartClosing, setIsShoppingCartClosing] = useState(false);

  function openShoppingCart() {
    setIsShoppingCartClosing(false);
    cartRef.current.showModal();
  }

  const appWrapperRef = useRef();

  // eslint-disable-next-line no-unused-vars
  const [initialize, instance] = useOverlayScrollbars({
    scrollbars: {
      visibility: "auto",
    },
  });

  useEffect(() => {
    initialize(appWrapperRef.current);
  }, [initialize]);

  return (
    <MainContext.Provider
      value={{
        isLogined,
        setIsLogined,

        language,
        setLanguage,

        currency,
        setCurrency,

        cart,
        setCart,

        openShoppingCart,

        isShoppingCartClosing,
        setIsShoppingCartClosing,
      }}
    >
      <AppWrapper ref={appWrapperRef}>
        <div>
          <ShoppingCart ref={cartRef} />

          <AppBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <AppFooter />
        </div>
      </AppWrapper>
    </MainContext.Provider>
  );
}

export default App;
