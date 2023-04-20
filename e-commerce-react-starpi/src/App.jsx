/* eslint-disable react/jsx-indent */
import { Outlet } from 'react-router-dom';
import { Footer } from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-264px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default App;
