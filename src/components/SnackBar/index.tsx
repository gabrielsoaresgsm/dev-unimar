// src/components/NotistackSnackbar.tsx
'use client';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SnackbarProvider, useSnackbar } from 'notistack';
import { RootState } from 'redux/store';

import { closeSnackbar } from '../../redux/features/snackbarSlice';

const Snackbar: React.FC = () => {
  const dispatch = useDispatch();
  const snackbar = useSelector((state: RootState) => state.snackbar);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (snackbar.open) {
      enqueueSnackbar(snackbar.message, { variant: snackbar.variant });
      dispatch(closeSnackbar());
    }
  }, [snackbar, enqueueSnackbar, dispatch]);

  return <React.Fragment />;
};

export const NotistackSnackbar: React.FC = () => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      autoHideDuration={2000}
    >
      <Snackbar />
    </SnackbarProvider>
  );
};

export default NotistackSnackbar;
