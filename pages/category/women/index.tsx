import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../../components/layout';
import { FullScreenLoading } from '../../../components/ui';
import { ProductList } from '../../../components/products';
import { useProducts } from '../../../hooks';

const WomenPage: NextPage = () => {
  const {products, isError, isLoading} = useProducts('/products?gender=women');
  return (
    <ShopLayout title="Teslo Shop - Women" pageDescription="Encuentra los mejores productos para Mujeres">
      <Typography variant="h1" component="h1">Mujeres</Typography>
      <Typography variant="h2" sx={{marginBottom: 1}}>Productos Para Mujeres</Typography>
      {
        isLoading ? <FullScreenLoading /> : <ProductList products={products} />
      }
    </ShopLayout>
  );
};

export default WomenPage;