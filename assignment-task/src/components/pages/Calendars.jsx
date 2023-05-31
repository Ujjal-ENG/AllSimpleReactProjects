import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendars = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div>
            <div>
                <h1>My Calendar</h1>
                <Calendar onChange={handleDateChange} value={selectedDate} />
            </div>
        </div>
    );
};

export default Calendars;
