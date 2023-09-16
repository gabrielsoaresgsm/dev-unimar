// src/features/snackbarSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SnackbarState {
  open: boolean;
  message: string;
  variant: 'default' | 'success' | 'error' | 'warning' | 'info';
}

const initialState: SnackbarState = {
  open: false,
  message: '',
  variant: 'default'
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbar: (state, action: PayloadAction<SnackbarState>) => {
      state.open = true;
      state.variant = action.payload.variant;
      state.message = action.payload.message;
    },
    closeSnackbar: (state) => {
      state.open = false;
    }
  }
});

// Ações exportadas
export const { setSnackbar, closeSnackbar } = snackbarSlice.actions;

// O redutor exportado
export default snackbarSlice.reducer;
