/* eslint-disable react/jsx-indent */
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/pages/Header';

function App() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
