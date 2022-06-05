import { Box, IconButton, Typography } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export const ItemCounter = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
    >
      <IconButton>
        <RemoveCircleOutlineIcon />
      </IconButton>
      <Typography sx={{width: 40, textAlign: 'center'}}>1</Typography>
      <IconButton>
        <AddCircleOutlineOutlinedIcon />
      </IconButton>
    </Box>
  );
};
