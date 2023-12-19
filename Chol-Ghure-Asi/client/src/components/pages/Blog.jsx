/* eslint-disable react/jsx-indent */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import BlogCard from './BlogCard';

function Blog() {
    const { blogs } = useLoaderData();

    return (
        <div>
            <div className="bg-black">
                <Navbar />
            </div>

            <h1 className="hover-stroke text-5xl font-bold" data-text="Blogs">
                Blogs
            </h1>

            <div className="grid grid-cols-2 gap-8 mt-5">{blogs && blogs?.map((blog) => <BlogCard key={blog?.id} data={blog} />)}</div>
        </div>
    );
}

export default Blog;
