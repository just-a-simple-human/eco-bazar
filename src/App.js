import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "#pages/Home/Home";
import Shop from "#pages/Shop/Shop";
import NotFound from "#pages/NotFound/NotFound";
import AppBar from "#features/AppBar/AppBar.jsx";
import AppFooter from "#features/AppFooter/AppFooter.jsx";
import styled from "styled-components";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import ShoppingCart from "#components/ShoppingCart/ShoppingCart.jsx";
import { Provider } from "react-redux"
import store from "./store";
import Modal from "#components/ui/Modal/Modal.jsx";

const AppWrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  position: relative;
`;

function App() {

  return (
    <Provider store={store}>
      <OverlayScrollbarsComponent>
      <AppWrapper>
        <div>
          <Modal modalName={"shoppingCart"}>
            <ShoppingCart />
          </Modal>

          <AppBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <AppFooter />
        </div>
      </AppWrapper>
      </OverlayScrollbarsComponent>
    </Provider>
  );
}

export default App;
