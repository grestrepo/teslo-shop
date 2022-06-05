import type { NextPage } from 'next';
import NextLink from 'next/link';
import { Box, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material';
import CreditCardOffOutlinedIcon from '@mui/icons-material/CreditCardOffOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';

import { ShopLayout } from '../../components/layout';
import { CartList, OrdenSummary } from '../../components/cart';

const OrderPage: NextPage = () => {
  return (
    <ShopLayout title="Resumen de la Orden 1234" pageDescription={'Resumen de la Orden'}>
      <Typography variant="h1" component="h1">Orden abc1234</Typography>

      {/* <Chip
        sx={{my: 2}}
        label="Pendiente de pago"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlinedIcon />}
      /> */}

      <Chip
        sx={{my: 2}}
        label="Pagada"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlinedIcon />}
      />

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
                <Typography variant="h1" component="h1">Pagar</Typography>
              </Box>
              <Chip
                sx={{my: 2}}
                label="Orden ya fue pagada"
                variant="outlined"
                color="success"
                icon={<CreditScoreOutlinedIcon />}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;