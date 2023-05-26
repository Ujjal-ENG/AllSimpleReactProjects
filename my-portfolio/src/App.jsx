import React from 'react';
import Navbar from './components/layouts/shared/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';

const App = () => {
    return (
        <>
            <div className="font-titleFont ">
                <Navbar />
            </div>
            <Home />
            <About />
            <Projects />
            <Contact />
        </>
    );
};

export default App;
