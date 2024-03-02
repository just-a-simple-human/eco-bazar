import React, { useRef, useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppBar from "./components/MainBlocks/AppBar";
import AppFooter from "./components/MainBlocks/AppFooter"
import { MainContext } from "./context";
import NotFoundPage from "./pages/NotFoundPage";
import ShoppingCart from "./components/MainBlocks/ShoppingCart";
import styled from "styled-components";

const AppWrapper = styled.div`

  width: 100vw;
  height: 100vh;

`

function App() {

  let [isLogined, setIsLogined] = useState(false);
  let [language, setLanguage] = useState('Eng');
  let [currency, setCurrency] = useState('USD');

  let [cart, setCart] = useState({

    products: [],

    getTotalCount() {
      return (this.products.length)
    },
    getTotalCost() {

      if (this.getTotalCount() === 0) return 0.00.toFixed(2)
      return this.products.map((element) => element.cost*element.weight).reduce((acc, cur) => acc += cur).toFixed(2)
    },
    addToCart(product) {
      if (!this.products.includes(product)) {
        setCart({...cart, products: [...this.products, product]})
      }
      else {
        setCart({...cart, products: [
          ...this.products.map((element)=>{
            if (element===product) {element.weight+=1}
            return element
          })
        ]})
      }
    },
    deleteFromCart(product) {
      setCart({...cart, products: [
        ...this.products.map((element)=>{
          if (element===product) {element.weight=1}
          return element
        }).filter((element) => element !== product)
      ]})
    }
  });

  const cartRef = useRef()
  let [isShoppingCartClosing, setIsShoppingCartClosing] = useState(false)

  function openShoppingCart() {

    setIsShoppingCartClosing(false)
    cartRef.current.showModal()

  }
  
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
        setIsShoppingCartClosing

      }}
      >

        <AppWrapper>

          <ShoppingCart ref={cartRef}/>

          <AppBar/>
          
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>

          <AppFooter></AppFooter>

        </AppWrapper>

      </MainContext.Provider>

  );

}

export default App;