import type { NextPage } from 'next';
import NextLink from 'next/link';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../../components/layout';

const RegisterPage: NextPage = () => {
  return (
    <AuthLayout title="Registrarse">
      <Box sx={{width: 350, padding: '10px 20px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1"  component="h1">Hacer Registro</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField label="Nombre" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label="Correo" variant="filled" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label="Contraseña" variant="filled" type="password" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <Button 
              color="secondary"
              className="circular-btn"
              size="large"
              fullWidth
            >
              Registrarse
            </Button>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="center">
            <NextLink href="/auth/login" passHref>
              <Link>
                ¿Ya tienes una cuenta?
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default RegisterPage;