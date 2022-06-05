import { FC } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

export const FullScreenLoading: FC = () => {
  return (
    <Box
      display="flex" 
      flexDirection="column"
      justifyContent="center" 
      alignItems="center" 
      height="calc(100vh - 200px)"
    >
      <Typography variant="h3" sx={{mb: 2}}>Cargando...</Typography>
      <CircularProgress thickness={2} />
    </Box>
  );
};
