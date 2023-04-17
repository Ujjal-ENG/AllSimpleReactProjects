/* eslint-disable react/jsx-indent */
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/shared/Footer';
import Header from './components/pages/Header';

function App() {
    return (
        <>
            <Header />
            <div className="min-h-[calc(100vh-136px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default App;
