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

    const fetchData = async () => {
        const { data } = await axios.get(`http://localhost:8080/events?page=${currentPage}&limit=${itemsPerPage}`);

        setEvents(data.volunteers);
    };

    useEffect(() => {
        fetchData();
    }, [currentPage, itemsPerPage]);

    // page option selection
    const options = [8, 16, 24, 30];
    const handleOptionChange = (e) => {
        setItemsPerPage(e.target.value);
        setCurrentPage(0);
    };
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (cardData) => {
        setSelectedCard(cardData);
    };

    return (
        <div>
            <div className=" -mt-60 grid grid-cols-4 max-w-7xl mx-auto">
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
            <ModalEdit data={selectedCard} />
        </div>
    );
};

export default VolinteerCards;
