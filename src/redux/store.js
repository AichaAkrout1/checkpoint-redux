import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from './TodoSlices/TodoSlice'

export const store = configureStore({
  reducer: {
    Todo : TodoSlice},
})