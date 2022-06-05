import { useContext } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { AppBar, Button, Box, Link, Toolbar, Typography, IconButton, Badge } from "@mui/material";

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import { UIContext } from '../../context';

export const NavBar = () => {
  const {asPath} = useRouter();
  const {toggleSideMenu} = useContext(UIContext);
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link underline="none" color="black" display="flex" alignItems="center">
            <Typography variant="h6">Teslo |</Typography>
            <Typography sx={{ml: 0.5}}>Shop</Typography>
          </Link>

        </NextLink>
        
        <Box flex={1} />

        <Box sx={{display: {
          xs: 'none',
          sm: 'block'
        }}}>
          <NextLink href="/category/men" passHref>
            <Link>
              <Button color={asPath === '/category/men' ? 'primary' : 'info'}>
                Hombres
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" passHref>
            <Link>
              <Button color={asPath === '/category/women' ? 'primary' : 'info'}>
                Mujeres
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kid" passHref>
            <Link>
              <Button color={asPath === '/category/kid' ? 'primary' : 'info'}>
                Niño
              </Button>
            </Link>
          </NextLink>
        </Box>

        
        <Box flex={1} />

        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>

        <NextLink href="/cart" passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
        <Button onClick={toggleSideMenu}>
          Menú
        </Button>

      </Toolbar>
    </AppBar>
  );
};
