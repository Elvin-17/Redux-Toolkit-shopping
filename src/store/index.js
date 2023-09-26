import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./Slices/ui-slice";
import cartReducer from "./Slices/cart-slice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        cart: cartReducer
    }
});

export default store;