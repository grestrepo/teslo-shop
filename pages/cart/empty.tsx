import type { NextPage } from 'next';
import NextLink from 'next/link';
import { Box, Link, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layout/ShopLayout';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

const EmptyPage: NextPage = () => {
  return (
    <ShopLayout title="Carrito vacío" pageDescription="No hay artículos en el carrito de compras">
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
        <RemoveShoppingCartOutlinedIcon sx={{fontSize: 100}} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography marginLeft={2} variant="h4">Su carrito está vacío</Typography>
          <NextLink href="/" passHref>
            <Link typography="h5" color="secondary">
              Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;