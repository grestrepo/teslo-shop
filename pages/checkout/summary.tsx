import type { NextPage } from 'next';
import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layout';
import { CartList, OrdenSummary } from '../../components/cart';

const SummaryPage: NextPage = () => {
  return (
    <ShopLayout title="Resumen de Orden" pageDescription={'Resumen de la Orden'}>
      <Typography variant="h1" component="h1">Resumen de la orden</Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          {/* Cartlist */}
          <CartList editable={false} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>
              <Divider sx={{my: 1}} />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Dirección de Entrega</Typography>
                <NextLink href="/checkout/address" passHref>
                  <Link underline="always">
                    Editar
                  </Link>
                </NextLink>
              </Box>
              <Typography>Gustavo Restrepo</Typography>
              <Typography>322 algún lugar</Typography>
              <Typography>lnakdnnalkancv</Typography>
              <Typography>Colombia</Typography>
              <Typography>+57 3117091099</Typography>

              <Divider sx={{my: 1}} />

              <Box display="flex" justifyContent="end">
                <NextLink href="/cart" passHref>
                  <Link underline="always">
                    Editar
                  </Link>
                </NextLink>
              </Box>
              
              <OrdenSummary />
              <Box sx={{mt: 3}}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Confirmar Orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;