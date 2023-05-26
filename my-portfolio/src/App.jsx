/* eslint-disable comma-dangle */
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Navbar from './components/layouts/shared/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
// You can also use <link> for styles
const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 800,
            easing: 'ease-in-out',
            delay: 30,
            once: false,
            disable() {
                const maxWidth = 1024;
                return window.innerWidth < maxWidth;
            }
        });

        // Refresh AOS when an element enters the viewport
        const handleAOSIn = () => {
            AOS.refresh();
        };

        window.addEventListener('aos:in', handleAOSIn);

        return () => {
            window.removeEventListener('aos:in', handleAOSIn);
        };
    }, []);
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
