import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/product';
import trlReducer from './slices/trl';
import themeConfigReducer from './slices/themeConfig';

export const store = configureStore({
  reducer: {
    product: productReducer,
    trl: trlReducer,
    themeConfig: themeConfigReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {product: ProductState}
export type AppDispatch = typeof store.dispatch;
