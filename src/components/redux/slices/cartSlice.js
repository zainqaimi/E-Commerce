import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addtocard: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Agar item already cart mein hai toh sirf count update karein
        existingItem.count += newItem.count;
      } else {
        // Agar new item hai toh use cart mein push karein
        state.items.push({ ...newItem, count: newItem.count });
      }

      // Total price ko bhi update karein
      state.totalPrice += newItem.price * newItem.quantity;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        // Deduct the item's total price from the total price
        state.totalPrice -= existingItem.price * existingItem.count;

        // Filter out the item from the cart
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
    // Update the count of an existing item in the cart
    updateItemCount: (state, action) => {
      const { id, count } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // Update the total price by removing the old count price and adding the new count price
        state.totalPrice -= existingItem.price * existingItem.count;
        existingItem.count = count;
        state.totalPrice += existingItem.price * count;
      }
    },
  },
});

export const selectcartitems = (state) => state.cart.items;
export const selectcartsTotalPrice = createSelector(
  [selectcartitems],
  (items) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0)
);
export const { addtocard, clearCart, updateItemCount, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
