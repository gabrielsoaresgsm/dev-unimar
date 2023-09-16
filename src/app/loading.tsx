'use client';
import React from 'react';

import { CircularProgress, Typography, Box } from '@mui/material';

const Loading: React.FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box textAlign="center">
        <CircularProgress />
        <Typography variant="h6" component="h2" mt={2}>
          Aguarde...
        </Typography>
      </Box>
    </Box>
  );
};

export default Loading;
