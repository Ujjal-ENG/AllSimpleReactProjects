/* eslint-disable react/jsx-indent-props */
import React from 'react';
import style from './imagezoom.module.css';

const ImageZoom = () => {
    return (
        <div className={style.boxImg}>
            <img
                src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="img"
                className="hover:scale-150 overflow-hidden transition-all duration-700 w-full h-full"
            />
        </div>
    );
};

export default ImageZoom;
