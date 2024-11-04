import { createSlice } from "@reduxjs/toolkit";

export const billSlice = createSlice({
    name: "bill",
    initialState: {
        items: null,
        billTotal: 0,
        reciptNo: 0
    },
    reducers: {
        setBill: (state, action) => {
            console.log(action.payload)
            state.items = action.payload.items
            state.billTotal = action.payload.billTotal
            state.reciptNo++
        }
    }

})
export const { setBill } = billSlice.actions
export default billSlice.reducer