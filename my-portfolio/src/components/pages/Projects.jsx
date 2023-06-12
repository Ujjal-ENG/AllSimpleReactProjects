/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import FoodieAdventurer from './FullStack/FoodAdventurer/FoodieAdventurer';
import ToyTroppers from './FullStack/ToyTroppers/ToyTroppers';

const Projects = () => {
    return (
        <div className="h-screen  relative pt-20" id="projects">
            <div className="hidden md:block top-1/2 fixed transform -translate-y-1/2">
                <div className="flex flex-col gap-5 ml-5">
                    <a href="https://www.facebook.com/ujjal.roy.7862" target="_blank" className="btn btn-square btn-outline" rel="noreferrer">
                        <i className="fa-brands fa-facebook fa-spin fa-2xl text-[#1f66e0]" />
                    </a>
                    <a href="https://github.com/Ujjal-ENG" target="_blank" className="btn btn-square btn-outline" rel="noreferrer">
                        <i className="fa-brands fa-github fa-spin fa-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/ujjal-kumar-roy/" target="_blank" className="btn btn-square btn-outline" rel="noreferrer">
                        <i className="fa-brands fa-linkedin fa-2xl fa-spin text-[#144eb3]" />
                    </a>
                </div>
            </div>
            <h1 className="text-6xl font-bold tracking-widest text-center pt-4">Case Study</h1>
            <FoodieAdventurer />
            <ToyTroppers />
        </div>
    );
};

export default Projects;
