'use client';
import { Box, Typography } from '@mui/material';

export default function NotFoundPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Typography variant="h1">Erro 404</Typography>
      <Typography variant="h5">Página não encontrada</Typography>
    </Box>
  );
}
