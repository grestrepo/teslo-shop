import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Box, Button, Grid, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layout';
import { ProductSlideShow, SizeSelector } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { dbProducts } from '../../database';
import { IProduct } from '../../interfaces';

interface Props {
  product: IProduct
}


const ProductPage: NextPage<Props> = ({ product }) => {

  return (
    <ShopLayout   
      title={product.title} 
      pageDescription={product.description}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          {/* slideSho */}
          <ProductSlideShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            {/* títulos */}
            <Typography variant="h1" component="h1">{product.title}</Typography>
            <Typography variant="subtitle1" component="h2">${product.price}</Typography>

            {/* Cantidad */}
            <Box sx={{my: 2}}>
              <Typography variant="subtitle2">Cantidad</Typography>
              {/* ItemCounter */}
              <ItemCounter />
              <SizeSelector selectedSize={product.sizes[0]} sizes={product.sizes} />
            </Box>

            {/* AgregarAlCarrito */}
            <Button color="secondary" className="circular-btn">
              Agregar al carrito
            </Button>

            {/* <Chip label="No hay disponibles" color="error" variant="outlined" /> */}
            <Box sx={{mt: 3}}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const slugs = await dbProducts.getAllProductsSlug();

  const paths = slugs.map(slug => {
    return {
      params: {
        ...slug
      }
    };
  });

  return {
    paths,
    fallback: "blocking"
  };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string || '';

  const product = await dbProducts.getProductBySlug(slug);


  return {
    props: {
      product
    }
  };
};


export default ProductPage;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   try {  
//     const slug = ctx.query.slug as string;
//     // const resp = await instance.get<IProductResponse>(`/products/${slug}`);
//     const product = await dbProducts.getProductBySlug(slug);

//     if(!product){
//       return {
//         redirect: {
//           destination: '/',
//           permanent: false
//         }
//       }; 
//     }
    
//     return {
//       props: {
//         product
//       }
//     };  
//   } catch (error) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }; 
//   }

// };
