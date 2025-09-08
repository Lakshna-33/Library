import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items: [],
    },
    reducers:{
        addtocart : (state,action) => {
            state.items.push(action.payload);
        },

        removefromcart : (state,action) => {
            const idToRemove = action.payload; // accepts only the id
      const index = state.items.findIndex((item) => item.id === idToRemove);

      if (index === -1) return; // nothing to remove

      if (state.items[index].quantity > 1) {
        // reduce quantity by one
        state.items[index].quantity -= 1;
      } else {
        // quantity === 1 -> remove the item completely
        state.items.splice(index, 1);
      }
    },

        clearcart : (state) => {
            state.items.length = 0;
    },
 },
    });


    export default cartSlice.reducer;
    export const { addtocart, removefromcart, clearcart } = cartSlice.actions;