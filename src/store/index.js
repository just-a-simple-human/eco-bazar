import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./shopSlice";
import cartSlice from "./cartSlice";
import modalSlice from "./modalSlice";
import appConfigSlice from "./appConfigSlice";

export default configureStore({
    reducer: {
        appConfig: appConfigSlice,
        cart: cartSlice,
        shop: shopSlice,
        modal: modalSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["modal/addModal"],
                ignoreState: true
            }
        })
})