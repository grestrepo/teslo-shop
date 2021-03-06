import type { NextPage } from 'next';
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layout';
import { CartList, OrdenSummary } from '../../components/cart';

const CartPage: NextPage = () => {
  return (
    <ShopLayout title="Carrito - 3" pageDescription={'Carrito de compras'}>
      <Typography variant="h1" component="h1">Carrito</Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          {/* Cartlist */}
          <CartList editable={false} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Orden</Typography>
              <Divider sx={{my: 1}} />

              <OrdenSummary />
              <Box sx={{mt: 3}}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CartPage;