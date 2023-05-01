/* eslint-disable react/jsx-indent */
import React from 'react';
import Navbar from '../layouts/Navbar';

function Blog() {
    return (
        <div>
            <div className="bg-black">
                <Navbar />
            </div>

            <h1 className="hover-stroke text-5xl font-bold" data-text="Blogs">
                Blogs
            </h1>
        </div>
    );
}

export default Blog;
