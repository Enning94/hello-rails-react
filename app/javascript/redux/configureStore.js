import { configureStore } from '@reduxjs/toolkit'
import greetingsReducer from './greetingsReducer';

export const store = configureStore({
  reducer: {
    greeting: greetingsReducer
  },
})

export default store;