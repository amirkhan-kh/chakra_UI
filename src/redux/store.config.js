import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todo/index'
export const store = configureStore({
    reducer: {
        todo: todoSlice
    }
})