import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { API_BASE_URL, APP_ID } from 'constants/config';
import { ThemeConfig } from 'common/interfaces/themeConfig';

// Define a type for the slice state
interface ThemeConfigState {
  theme: ThemeConfig;
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: ThemeConfigState = {
  theme: { hasUserSection: true, id: 0, logo: '', mainColor: '' },
  error: null,
  loading: true,
};

export const fetchThemeConfig = createAsyncThunk('theme-config/fetch', async () => {
  const response = await fetch(`${API_BASE_URL}/configuration/${APP_ID}/`);

  if (!response.ok) {
    throw new Error('Failed to fetch theme config');
  }

  const data = await response.json();

  return data;
});

export const themeConfigSlice = createSlice({
  name: 'themeConfig',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchThemeConfig.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchThemeConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.theme = action.payload;
      })
      .addCase(fetchThemeConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectThemeConfig = (state: RootState) => state.themeConfig.theme;
export const selectThemeConfigLoading = (state: RootState) => state.themeConfig.loading;
export const selectThemeConfigError = (state: RootState) => state.themeConfig.error;

export default themeConfigSlice.reducer;
