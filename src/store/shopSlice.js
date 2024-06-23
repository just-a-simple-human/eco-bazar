import { createSlice } from "@reduxjs/toolkit";
import ProductApi from '#mock/products/products.js';

const shopSlice = createSlice({

    name: "shop",

    initialState: {
        products: [],
        productsFound: 0,
        filters: {
            category: null,
            price: null,
            rating: null,
            productsPerPage: 8,
            sort: "Latest"
        },
        activePage: 1,
        maxActivePage: 1
    },

    reducers: {
        fetchProducts(state, action) {
            state.products.push(...(
                new ProductApi()
                .getProducts(state.products.length, action.payload - state.products.length, state.filters)
            ))
        },
        updateProductsFound(state) {
            state.productsFound = new ProductApi()
            .getProductsCount(state.filters)
        },
        changeFilter(state, action) {
            state.filters[action.payload.filter] = action.payload.value
        },
        changeActivePage(state, action) {
            state.activePage = action.payload
        },
        changeMaxActivePage(state, action) {
            state.maxActivePage = action.payload
        },
        reset(state) {
            state.activePage = 1
            state.maxActivePage = 1
            state.products.length = 0
        }
    }

})

export const { 
    fetchProducts,
    updateProductsFound,
    changeFilter,
    changeActivePage,
    changeMaxActivePage,
    reset
 } = shopSlice.actions
export default shopSlice.reducer