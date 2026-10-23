import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart(state, item) {
            state.items.push(item.payload.item);
        },
        removeFromCart(state, { item }) {

        },
        clearCart() {
            return { items: [] }
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;