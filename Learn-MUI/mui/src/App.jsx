/* eslint-disable max-len */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';

function App() {
    // const theme = useTheme();
    // const colorMode = React.useContext(ColorModeContext);
    return (
        // <Box
        //     sx={{
        //         display: 'flex',
        //         flexDirection: 'column',
        //         width: '100%',
        //         alignItems: 'center',
        //         justifyContent: 'end',
        //         bgcolor: 'background.default',
        //         color: 'text.primary',
        //         borderRadius: 1
        //     }}>
        //     {theme.palette.mode}
        //     <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        //         {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        //     </IconButton>
        //     <Navbar />
        // </Box>
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default App;
