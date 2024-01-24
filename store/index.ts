import { configureStore } from '@reduxjs/toolkit';
import basket from './slices/basket.slice';
import products from './slices/products.slice';

export const store = configureStore({
  reducer: {
    basket,
    products,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
