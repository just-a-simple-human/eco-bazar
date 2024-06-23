import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({

    name: "appConfig",

    initialState: {
        language: "Eng",
        currency: "USD"
    },

    reducers: {
        changeLanguage (state, action) {
            state.language = action.payload
        },
        changeCurrency (state, action) {
            state.currency = action.payload
        }
    }

})

export const {changeLanguage, changeCurrency} = appConfigSlice.actions
export default appConfigSlice.reducer