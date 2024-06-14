import { configureStore} from "@reduxjs/toolkit";
import cartSlices from "./slices/cartSlices";

const store = configureStore({
    reducer: {cart: cartSlices}
})

console.log("Create store: ", store.getState())
store.subscribe(() => {
    console.log("Update store: ", store.getState())
})

export default store