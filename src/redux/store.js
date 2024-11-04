import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/reduxSlice.js"
import billReducer from './slices/billSlice.js';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        bill: billReducer,
    }

})

export default store;