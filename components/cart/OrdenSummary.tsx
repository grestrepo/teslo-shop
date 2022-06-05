import { FC } from 'react';
import { Grid, Typography } from '@mui/material';

export const OrdenSummary: FC = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>

      <Grid item display="flex" justifyContent="end" xs={6}>
        <Typography>3</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>

      <Grid item display="flex" justifyContent="end" xs={6}>
        <Typography>$ 155.587</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Impuestos (15%)</Typography>
      </Grid>

      <Grid item display="flex" justifyContent="end" xs={6}>
        <Typography>$ 24.5</Typography>
      </Grid>

      <Grid item xs={6} sx={{mt: 2}}>
        <Typography variant="subtitle1">Total: </Typography>
      </Grid>

      <Grid item display="flex" justifyContent="end" xs={6} sx={{mt: 2}}>
        <Typography>$ 179.54</Typography>
      </Grid>
    </Grid>
  );
};
