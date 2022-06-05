import type { NextPage, GetStaticProps } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layout';
import { ProductList } from '../components/products';

import { dbProducts } from '../database';

import { IProduct } from '../interfaces';


interface Props {
  products: IProduct[]
}


const HomePage: NextPage<Props> = ({ products }) => {

  return (
    <ShopLayout
      title={'Teslo-shop - Home'}
      pageDescription={'Encuentra los mejores productos de teslo aquí'}
    >
      <Typography variant="h1" component="h1">Tienda Teslo</Typography>
      <Typography variant="h2" sx={{marginBottom: 1}}>Todos los productos</Typography>
      {/* {
        isLoading ? <FullScreenLoading /> : <ProductList products={products} />
      } */}
      <ProductList products={products} />
    </ShopLayout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const products = await dbProducts.getAllProducts();

  return {
    props: {
      products
    }
  };
};

export default HomePage;
