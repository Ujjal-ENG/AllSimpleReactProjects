/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendars = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div className="mx-2 border-0">
            <h1>My Calendar</h1>
            <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                className=" shadow-2xl p-3
            "
            />
        </div>
    );
};

export default Calendars;
