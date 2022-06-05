import type { NextPage } from 'next';
import NextLink from 'next/link';
import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp, GridValueGetterParams } from '@mui/x-data-grid';

import { ShopLayout } from '../../components/layout';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'Nombre Completo', width: 300 },
  { 
    field: 'paid', 
    headerName: 'Pagada', 
    width: 200, 
    description: 'Muestra si la orden está pagada', 
    renderCell: (params: GridValueGetterParams) => {
      return (
        params.row.paid
          ? <Chip color="success" label="Pagada" variant="outlined" />
          : <Chip color="error" label="Sin Pagar" variant="outlined" />
      );
    }
  },
  {
    field: 'orden',
    headerName: 'Ver Orden',
    width: 100,
    sortable: false,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref prefetch={false}>
          <Link underline="always">Ver Orden</Link>
        </NextLink>
      );
    },
  }
];

const rows: GridRowsProp = [
  { id: 1, paid: true, firstName: 'Gustavo Restrepo' },
  { id: 2, paid: false, firstName: 'Juan Manuel Dávila' },
  { id: 3, paid: false, firstName: 'Yessika Restrepo' },
  { id: 4, paid: true, firstName: 'Julia Gil' },
  { id: 5, paid: false, firstName: 'Felipe Gomez' },
  { id: 6, paid: false, firstName: 'Daniel Restrepo' },
];

const HistoryPage: NextPage = () => {
  return (
    <ShopLayout title="Historial de Ordenes" pageDescription="Historial de ordenes del cliente">
      <Typography variant="h1" component="h1">Historial de ordenes</Typography>
      <Grid container>
        <Grid item xs={12} sx={{height: 650, width: '100%'}}>
          <DataGrid 
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;