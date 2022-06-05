import type { NextPage } from 'next';
import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layout';

const AddressPage: NextPage = () => {
  return (
    <ShopLayout title="Dirección" pageDescription="Confirmar Dirección del destino">
      <Typography variant="h1" component="h1">Dirección</Typography>

      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Nombre" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Apellido" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Dirección" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Dirección 2" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Código postal" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Ciudad" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <Select variant="filled" label="País" value={1}>
              <MenuItem value={1}>Colombia</MenuItem>
              <MenuItem value={2}>Ecuador</MenuItem>
              <MenuItem value={3}>Perú</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Teléfono" variant="filled" fullWidth />
        </Grid>
      </Grid>

      <Box sx={{mt: 5}} display="flex" justifyContent="center">
        <Button color="secondary" className="circular-btn" size="large">
          Revisar Pedido
        </Button>
      </Box>
    </ShopLayout>
  );
};

export default AddressPage;