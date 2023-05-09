/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import { useTheme } from '@emotion/react';
import { Brightness4Icon } from '@mui/icons-material/Brightness4';
import { Brightness7Icon } from '@mui/icons-material/Brightness7';
import { Box, IconButton } from '@mui/material';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ColorModeContext } from '../../context/DarkModeProvider';

const Navbar = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <Box
            className="text-2xl font-bold gap-10"
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'end',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1
            }}>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {/* {theme.palette.mode} */}
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    );
};

export default Navbar;
