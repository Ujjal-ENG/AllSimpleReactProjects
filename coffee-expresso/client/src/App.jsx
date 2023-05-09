import { ThemeProvider, useColorMode } from 'daisyui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';

function MyApp({ Component, pageProps }) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <ThemeProvider color={colorMode === 'dark' ? 'dark' : undefined} onClick={toggleColorMode}>
            <div className="bg-white dark:bg-gray-800">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

function App() {
    return (
        <MyApp>
            <Outlet />
        </MyApp>
    );
}

export default App;
