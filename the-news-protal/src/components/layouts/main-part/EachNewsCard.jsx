/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import moment from 'moment';
import React from 'react';
import { BsBookmark, BsFillEyeFill, BsShare, BsStar, BsStarFill } from 'react-icons/bs';
import Rating from 'react-rating';
import { Link, useLocation } from 'react-router-dom';

function EachNewsCard({ data }) {
    const location = useLocation();
    const news = data;
    return (
        <>
            {news.length === 0 ? (
                <div className="alert alert-warning shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                        <span>Warning: {news.length} data found!!!</span>
                    </div>
                </div>
            ) : (
                <div className="alert alert-success shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{news.length} data found!!!</span>
                    </div>
                </div>
            )}
            <div className="h-[1550px] overflow-y-scroll scrollbar-hidden">
                {news &&
                    news.map((el) => (
                        <div className="border-2 rounded-xl my-4" key={el._id}>
                            <div className="flex justify-start items-start gap-2 rounded-t-md bg-gray-200 p-4">
                                <div className="avatar placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                        <img src={el.author.img} alt={el.author.name} />
                                    </div>
                                </div>

                                <div className="grow justify-start flex-col">
                                    <h3 className="text-xl font-bold">{el.author.name}</h3>
                                    <h3 className="text-gray-400">{moment().format('yyy Mo ddd')}</h3>
                                </div>

                                <div className="grow-0 flex justify-between items-center gap-4 text-3xl">
                                    <BsBookmark />
                                    <BsShare />
                                </div>
                            </div>

                            <h1 className="text-2xl font-bold p-4">{el.title}</h1>

                            <img src={el.image_url} alt="" className="mx-auto object-cover p-4" />

                            <p className="text-gray-400 tracking-widest px-4">{`${el.details.slice(0, 200)}...`}</p>
                            <Link to={`/news/${el._id}`} state={location} type="button" className="btn btn-ghost text-yellow-400 font-bold mx-2">
                                Read More
                            </Link>

                            <div className="pt-4 border-t-2 mx-5" />

                            <div className="p-4 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Rating
                                        placeholderRating={el.rating.number}
                                        emptySymbol={<BsStar />}
                                        placeholderSymbol={<BsStarFill className="text-yellow-500" />}
                                        fullSymbol={<BsStarFill className="text-yellow-500" />}
                                        readonly
                                    />

                                    <p>{el.rating.number}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BsFillEyeFill />
                                    <p>{el.total_view}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default EachNewsCard;
