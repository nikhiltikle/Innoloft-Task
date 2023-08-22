import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { TechnologyReadinessLevel } from 'common/interfaces/product';
import { API_BASE_URL } from 'constants/config';

// Define a type for the slice state
interface TrlState {
  trls: TechnologyReadinessLevel[];
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: TrlState = {
  trls: [],
  error: null,
  loading: true,
};

export const fetchTrls = createAsyncThunk('trl/fetch', async () => {
  const response = await fetch(`${API_BASE_URL}/trl/`);

  if (!response.ok) {
    throw new Error('Failed to fetch Trls');
  }

  const data = await response.json();

  return data;
});

export const trlSlice = createSlice({
  name: 'trl',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTrls.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrls.fulfilled, (state, action) => {
        state.loading = false;
        state.trls = action.payload;
      })
      .addCase(fetchTrls.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectTrls = (state: RootState) => state.trl.trls;
export const selectTrlsLoading = (state: RootState) => state.trl.loading;
export const selectTrlsError = (state: RootState) => state.trl.error;

export default trlSlice.reducer;
