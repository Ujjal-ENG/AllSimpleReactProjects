/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ModalEdit from './ModalEdit';
import VolunteerCard from './VolunteerCard';

const VolinteerCards = ({ results }) => {
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const totalPages = Math.ceil(results / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];
    const [isChange, setIsChange] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [search, setSearch] = useState('');
    const fetchData = async () => {
        const { data } = await axios.get(`http://localhost:8080/events?page=${currentPage}&limit=${itemsPerPage}&search=${search}`);

        setEvents(data.volunteers);
    };

    useEffect(() => {
        fetchData();
    }, [currentPage, itemsPerPage, isChange]);

    // page option selection
    const options = [8, 16, 24, 30];
    const handleOptionChange = (e) => {
        setItemsPerPage(e.target.value);
        setCurrentPage(0);
    };

    const handleCardClick = (cardData) => {
        setSelectedCard(cardData);
    };
    const handleChange = (value) => {
        setIsChange((ps) => ({ ...ps, ...value }));
    };
    const handleSearch = () => {
        fetchData();
    };
    return (
        <div className="-mt-60 ">
            <div className="relative mr-4 z-20">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-gray-100 border-2 border-gray-200 rounded-lg py-2.5 pr-8 pl-2 md:max-w-2xl  focus:outline-none md:w-96 mb-10 md:mb focus:bg-white"
                />
                <button type="button" className="btn btn-primary absolute right-0 top-0 " onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto">
                {events.map((event) => (
                    <VolunteerCard key={event._id} data={event} onClick={handleCardClick} />
                ))}
            </div>
            <div className="flex justify-center items-center gap-2">
                <div className="btn-group my-5 ">
                    {pageNumbers.map((number) => (
                        <button key={number} type="button" className={`btn ${number === currentPage ? 'btn-active' : ''}`} onClick={() => setCurrentPage(number)}>
                            {number + 1}
                        </button>
                    ))}
                </div>
                <select value={itemsPerPage} onChange={handleOptionChange} className="select select-bordered w-32">
                    {options.map((option) => (
                        <option key={option}>{option}</option>
                    ))}
                </select>
            </div>
            <ModalEdit data={selectedCard} onClick={handleChange} />
        </div>
    );
};

export default VolinteerCards;
