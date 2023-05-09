/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { ColorModeContext } from './context/DarkModeProvider';

function App() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'end',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1
            }}>
            {theme.palette.mode}
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Typography variant="h3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, deleniti ipsa, inventore incidunt, vel fugit voluptatum repellat at nostrum corrupti commodi quis! Dolor voluptatibus
                minima quo totam numquam id ut!
            </Typography>
        </Box>
    );
}

export default App;
