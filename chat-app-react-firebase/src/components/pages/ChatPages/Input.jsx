/* eslint-disable react/jsx-indent */
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { FcImageFile } from 'react-icons/fc';
import { MdOutlineAttachFile } from 'react-icons/md';

function Input() {
    return (
        <div className="bg-white p-3.5 rounded-b-sm flex justify-between items-center">
            <input type="text" className="w-3/4 h-full bg-white p-3 text-black" placeholder="Type SomeThing" />
            <div className="text-4xl flex items-center gap-3">
                <MdOutlineAttachFile className="cursor-pointer active:text-3xl" />
                <div className="flex items-center border-gray-300 rounded-md cursor-pointer">
                    <input className="opacity-0 absolute" type="file" />

                    <FcImageFile className="cursor-pointer active:text-3xl" />
                </div>

                <AiOutlineSend className="cursor-pointer text-green-400 duration-500 transition-all active:translate-x-5" />
            </div>
        </div>
    );
}

export default Input;
