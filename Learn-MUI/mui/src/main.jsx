import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ToggleColorMode from './context/DarkModeProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ToggleColorMode>
        <App />
    </ToggleColorMode>
);
