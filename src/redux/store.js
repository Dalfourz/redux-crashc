import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import { postApi } from './postSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [postApi.reducerPath]: postApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),

})