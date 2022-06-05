import type {NextPage} from 'next';
import { Box, Typography } from '@mui/material';

import { ShopLayout } from '../components/layout';

const Error404Page: NextPage = () => {
  return (
    <ShopLayout title="Page not found" pageDescription="No hay nada por mostrar">
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        height="calc(100vh - 200px)"
        sx={{ 
          flexDirection: {
            xs: 'column',
            sm: 'row' 
          }
        }}
      >
        <Typography 
          variant="h1" 
          component="h1"
          fontSize={80}
          fontWeight={200}
        >404 |</Typography>  
        <Typography marginLeft={2}>No encontramos nada</Typography>
      </Box>
    </ShopLayout>
  );
};

export default Error404Page;