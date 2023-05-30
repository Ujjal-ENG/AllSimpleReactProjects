import React from 'react';

const CategoryBox = ({ label, icon: ICON }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-4 hover:text-neutral-800 border-transparent text-neutral-500 cursor-pointer duration-150 transition-all ease-linear">
            <ICON size={26} />
            <p className="text-sm font-medium">{label}</p>
        </div>
    );
};

export default CategoryBox;
