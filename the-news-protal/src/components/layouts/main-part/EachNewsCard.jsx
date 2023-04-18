/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { BsBookmark, BsFillEyeFill, BsFillStarFill, BsShare } from 'react-icons/bs';

function EachNewsCard() {
    const [news, setNews] = useState([]);
    const fetchNews = async () => {
        const fetchURL = await fetch('http://localhost:3000/all-news');
        const data = await fetchURL.json();
        const newsData = data.data.map((newsItem) => ({
            ...newsItem,
            isExpand: false
        }));
        setNews(newsData);
    };
    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="h-screen overflow-y-scroll scrollbar-hidden">
            {news &&
                news.map((el, index) => (
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

                        <p className="text-gray-400 tracking-widest px-4">{!el.isExpand ? `${el.details.slice(0, 200)}...` : `${el.details}`}</p>
                        <button
                            type="button"
                            className="btn btn-ghost text-yellow-400 font-bold mx-2"
                            onClick={() => {
                                const newNews = [...news];
                                newNews[index].isExpand = !newNews[index].isExpand;
                                setNews(newNews);
                            }}>
                            {el.isExpand ? 'Read Less' : 'Read More'}
                        </button>

                        <div className="pt-4 border-t-2 mx-5" />

                        <div className="p-4 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <BsFillStarFill className="text-yellow-500" />
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
    );
}

export default EachNewsCard;