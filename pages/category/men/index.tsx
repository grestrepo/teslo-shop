import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../../../components/layout';
import { FullScreenLoading } from '../../../components/ui';
import { ProductList } from '../../../components/products';
import { useProducts } from '../../../hooks';

const MenPage: NextPage = () => {
  const {products, isError, isLoading} = useProducts('/products?gender=men');
  return (
    <ShopLayout title="Teslo Shop - Men" pageDescription="Encuentra los mejores productos para Hombres">
      <Typography variant="h1" component="h1">Hombres </Typography>
      <Typography variant="h2" sx={{marginBottom: 1}}>Productos Para Hombres</Typography>
      {
        isLoading ? <FullScreenLoading /> : <ProductList products={products} />
      }
    </ShopLayout>
  );
};

export default MenPage;