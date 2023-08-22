import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Product } from 'common/interfaces/product';
import { API_BASE_URL } from 'constants/config';

// Define a type for the slice state
interface ProductState {
  product: Product;
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: ProductState = {
  product: {
    id: 0,
    name: '',
    description: '',
    picture: '',
    type: {
      id: 0,
      name: '',
    },
    categories: [],
    implementationEffortText: null,
    investmentEffort: '',
    trl: {
      id: 0,
      name: '',
    },
    video: '',
    user: {
      id: 0,
      email: '',
      firstName: '',
      lastName: '',
      sex: 1,
      profilePicture: '',
      position: '',
    },
    company: {
      name: '',
      logo: '',
      address: {
        country: {
          name: '',
        },
        city: {
          name: '',
        },
        street: '',
        house: '',
        zipCode: '',
        longitude: '',
        latitude: '',
      },
    },
    businessModels: [],
  },
  error: null,
  loading: true,
};

export const fetchProduct = createAsyncThunk('product/fetch', async () => {
  const response = await fetch(`${API_BASE_URL}/product/6781/`);

  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }

  const data = await response.json();

  return data;
});

export const updateProduct = createAsyncThunk('product/update', async (productData: Product) => {
  const response = await fetch(`${API_BASE_URL}/product/6781/`, { method: 'PUT', body: JSON.stringify(productData) });

  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }

  const data = await response.json();

  return data;
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(updateProduct.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectProduct = (state: RootState) => state.product.product;
export const selectLoading = (state: RootState) => state.product.loading;
export const selectError = (state: RootState) => state.product.error;

export default productSlice.reducer;
