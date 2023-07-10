/* eslint-disable react/jsx-indent-props */
import React from 'react';

const ImageZoom = () => {
    const boxImgStyles = {
        width: '450px',
        height: '300px',
        overflow: 'hidden',
        display: 'flex',
        gap: '20px'
    };

    return (
        <div style={boxImgStyles}>
            <img
                src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="img"
                className="hover:scale-150 transition-all duration-700 w-full h-full"
            />
        </div>
    );
};

export default ImageZoom;
