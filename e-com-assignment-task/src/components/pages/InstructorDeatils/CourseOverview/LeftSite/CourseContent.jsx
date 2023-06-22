/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { AiFillLock } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { TbPointFilled } from 'react-icons/tb';
import Swal from 'sweetalert2';

const CourseContent = () => {
    const handlePay = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Buy the Course Asap!!'
        });
    };
    return (
        <div className="border border-primary rounded-lg p-2 md:p-10 space-y-3 mb-10">
            <h1 className="text-2xl font-bold pb-5">Course Content</h1>
            <div className="flex md:flex-row flex-wrap flex-col justify-start items-center pb-5">
                <p className="text-xl font-semibold">18 Section</p>
                <p className="ml-5 inline-flex gap-2 text-xl font-semibold items-center">
                    <TbPointFilled size={32} />
                    101 Lectures
                </p>
                <p className="ml-5 inline-flex gap-2 text-xl font-semibold items-center">
                    <TbPointFilled size={32} />
                    4h 43m total length
                </p>
            </div>
            <div className="collapse collapse-arrow border-b-2 border-black">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl pb-4 inline-flex flex-col font-medium">
                    About The Trainer
                    <p className="inline-flex gap-2   text-xl font-medium items-center">
                        2 Lectures
                        <TbPointFilled size={32} />
                        14 minutes
                    </p>
                </div>

                <div className="collapse-content py-5">
                    <div className="flex items-center justify-between py-4">
                        <a href="#" className="inline-flex items-center gap-2 text-xl tracking-wider">
                            <BsFillPlayFill size={32} color="gray" />A Short intro About Me
                        </a>
                        <p className="inline-flex items-center gap-2 text-xl tracking-wider">40.16</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="button" onClick={handlePay} className="inline-flex cursor-pointer items-center gap-2 text-xl tracking-wider">
                            <BsFillPlayFill size={32} color="gray" />
                            My Projects
                        </button>
                        <p className="inline-flex items-center gap-2 text-xl tracking-wider">
                            <AiFillLock />
                            32.30
                        </p>
                    </div>
                </div>
            </div>
            <div className="collapse collapse-arrow border-b-2 border-black">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl pb-4 inline-flex flex-col font-medium">
                    About You
                    <p className="inline-flex gap-2   text-xl font-medium items-center">
                        8 Lectures
                        <TbPointFilled size={32} />
                        23 minutes
                    </p>
                </div>
                <div className="collapse-content py-5">
                    <div className="flex items-center justify-between py-4">
                        <a href="#" className="inline-flex items-center gap-2 text-xl tracking-wider">
                            <BsFillPlayFill size={32} color="gray" />A Short intro Course
                        </a>
                        <p className="inline-flex items-center gap-2 text-xl tracking-wider">22.16</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="button" onClick={handlePay} className="inline-flex cursor-pointer items-center gap-2 text-xl tracking-wider">
                            <BsFillPlayFill size={32} color="gray" />
                            My Games
                        </button>
                        <p className="inline-flex items-center gap-2 text-xl tracking-wider">
                            <AiFillLock />
                            47.30
                        </p>
                    </div>
                </div>
            </div>
            <div className="collapse collapse-arrow border-b-2 border-black">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl pb-4 inline-flex flex-col font-medium">
                    From Zero to Hero
                    <p className="inline-flex gap-2   text-xl font-medium items-center">
                        5 Lectures
                        <TbPointFilled size={32} />
                        16 minutes
                    </p>
                </div>
                <div className="collapse-content py-5">
                    <div className="flex items-center justify-between py-4">
                        <a href="#" className="inline-flex items-center gap-2 text-xl tracking-wider">
                            <BsFillPlayFill size={32} color="gray" />A Short intro About Me
                        </a>
                        <p className="inline-flex items-center gap-2 text-xl tracking-wider">40.16</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="button" onClick={handlePay} className="inline-flex cursor-pointer items-center gap-2 text-xl tracking-wider">
                            <BsFillPlayFill size={32} color="gray" />
                            My Projects
                        </button>
                        <p className="inline-flex items-center gap-2 text-xl tracking-wider">
                            <AiFillLock />
                            32.30
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseContent;
