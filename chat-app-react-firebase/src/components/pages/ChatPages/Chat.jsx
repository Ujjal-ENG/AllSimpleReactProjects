/* eslint-disable react/jsx-indent */
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FcBusinessman, FcVideoCall } from 'react-icons/fc';
import Input from './Input';
import Messages from './Messages';

function Chat() {
    return (
        <div className="grow">
            <div className="bg-black w-full flex justify-between items-center">
                <h3 className="text-2xl text-white p-3 font-bold">Ujjal</h3>
                <div className="text-4xl cursor-pointer flex items-center gap-4 px-3">
                    <FcVideoCall />
                    <FcBusinessman />
                    <BsThreeDots />
                </div>
            </div>
            <div className="min-h-[calc(100vh-258px)] max-h-[calc(100vh-258px)] overflow-y-auto scroll-behavior-smooth">
                <Messages />
            </div>
            <Input />
        </div>
    );
}

export default Chat;
