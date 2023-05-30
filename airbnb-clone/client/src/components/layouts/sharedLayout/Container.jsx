/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

const Container = ({ children }) => {
    return (
        <div
            className="max-w-[2520px] mx-auto xl:px-20 md
  :px-10 sm:px-2 px-4">
            {children}
        </div>
    );
};

export default Container;
