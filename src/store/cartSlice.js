import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: "cart",

    initialState: {
        products: []
    },

    reducers: {
        addProduct(state, action) {
            if (state.products.find(p => p.id === action.payload.id)) {
                state.products.find(p => p.id === action.payload.id).weight += 1
            }
            else {
                state.products.push({...action.payload, weight: 1})
            }
        },
        deleteProduct(state, action){
            state.products = state.products.filter(p => p.id !== action.payload.id)
        }
    }

})

export const { addProduct, deleteProduct } = cartSlice.actions
export default cartSlice.reducer