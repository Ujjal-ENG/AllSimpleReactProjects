/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// function MyApp() {
//     const theme = useTheme();
//     const colorMode = React.useContext(ColorModeContext);
//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 width: '100%',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 bgcolor: 'background.default',
//                 color: 'text.primary',
//                 borderRadius: 1,
//                 p: 3
//             }}>
//             {theme.palette.mode} mode
//             <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
//                 {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//         </Box>
//     );
// }

export default function ToggleColorMode({ children }) {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            }
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode
                }
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    );
}
