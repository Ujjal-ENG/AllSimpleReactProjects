/* eslint-disable react/jsx-indent */
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Navbar from './components/layouts/shared/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-136px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default App;
