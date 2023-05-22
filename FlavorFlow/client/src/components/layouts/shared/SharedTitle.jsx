import React from 'react';

const SharedTitle = ({ message, title }) => {
    return (
        <div className="flex flex-col w-full border-opacity-50 max-w-xs mx-auto">
            <h5 className="-mb-4 text-yellow-500 font-semibold text-center mt-24">
                {' '}
                --
                {message}
                --
            </h5>
            <div className="divider" />
            <h1 className="text-center text-4xl font-bold">{title}</h1>

            <div className="divider rounded-xl" />
        </div>
    );
};

export default SharedTitle;
