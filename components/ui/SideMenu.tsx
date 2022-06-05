import { FC, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { 
  Box, 
  Divider, 
  Drawer, 
  IconButton, 
  Input, 
  InputAdornment, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  ListSubheader 
} from '@mui/material';
import { 
  AccountCircleOutlined, 
  AdminPanelSettings, 
  CategoryOutlined, 
  ConfirmationNumberOutlined, 
  EscalatorWarningOutlined, 
  FemaleOutlined, 
  LoginOutlined, 
  MaleOutlined, 
  SearchOutlined, 
  VpnKeyOutlined 
} from '@mui/icons-material';

import { UIContext } from '../../context';


export const SideMenu: FC = () => {
  const {isMenuOpen, toggleSideMenu} = useContext(UIContext);
  const [searchTerm, setSearchTerm] = useState('');
  const { push } = useRouter();
  const onSearchTerm = () => {
    if(searchTerm.trim().length === 0){
      return;
    }

    toggleSideMenu();
    navigateTo(`/search/${searchTerm}`);
  };
  const navigateTo = (url: string) => {
    push(url);
    setSearchTerm('');
  };
  return (
    <Drawer
      open={ isMenuOpen }
      anchor="right"
      onClose={toggleSideMenu}
      sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
    >
        <Box sx={{ width: 250, paddingTop: 5 }}>
          <List>
            <ListItem>
              <Input
                value={searchTerm}
                type="text"
                placeholder="Buscar..."
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if(e.code === 'Enter'){
                    onSearchTerm();
                  }
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={onSearchTerm}>
                      <SearchOutlined />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <AccountCircleOutlined/>
              </ListItemIcon>
              <ListItemText primary={'Perfil'} />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <ConfirmationNumberOutlined/>
              </ListItemIcon>
              <ListItemText primary={'Mis Ordenes'} />
            </ListItem>


            <ListItem button sx={{ display: { xs: '', sm: 'none' } }} onClick={() => navigateTo('/category/men')}>
              <ListItemIcon>
                <MaleOutlined/>
              </ListItemIcon>
              <ListItemText primary={'Hombres'} />
            </ListItem>

            <ListItem button sx={{ display: { xs: '', sm: 'none' } }} onClick={() => navigateTo('/category/women')}>
              <ListItemIcon>
                <FemaleOutlined/>
              </ListItemIcon>
              <ListItemText primary={'Mujeres'} />
            </ListItem>

            <ListItem button sx={{ display: { xs: '', sm: 'none' } }} onClick={() => navigateTo('/category/kid')}>
              <ListItemIcon>
                <EscalatorWarningOutlined/>
              </ListItemIcon>
              <ListItemText primary={'Niños'} />
            </ListItem>


            <ListItem button>
              <ListItemIcon>
                <VpnKeyOutlined/>
              </ListItemIcon>
              <ListItemText primary={'Ingresar'} />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <LoginOutlined/>
              </ListItemIcon>
              <ListItemText primary={'Salir'} />
            </ListItem>


            {/* Admin */}
            <Divider />
            <ListSubheader>Admin Panel</ListSubheader>

            <ListItem button>
              <ListItemIcon>
                <CategoryOutlined/>
              </ListItemIcon>
              <ListItemText primary={'Productos'} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ConfirmationNumberOutlined/>
              </ListItemIcon>
              <ListItemText primary={'Ordenes'} />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <AdminPanelSettings/>
              </ListItemIcon>
              <ListItemText primary={'Usuarios'} />
            </ListItem>
          </List>
        </Box>
    </Drawer>
  );
};