import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/product';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {product: ProductState}
export type AppDispatch = typeof store.dispatch;
