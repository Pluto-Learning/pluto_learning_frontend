"use client"
import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import moment from 'moment'

// Configure localizer for date-fns
const locales = {
  'en-US': enUS,
};

const localizer = momentLocalizer(moment)


export default function MyCalendar() {

    const [events, setEvents] = useState([
        {
            title: "CSE 1310",
            allDay: false,
            start: new Date(2024, 8, 19, 10, 0), // September 22, 2024 at 10:00 AM
            end: new Date(2024, 8, 19, 13, 0),   // September 22, 2024 at 12:00 PM
        },
        {
            title: "MATH 2425",
            allDay: false,
            start: new Date(2024, 8, 23, 13, 0), // September 23, 2024 at 1:00 PM
            end: new Date(2024, 8, 23, 14, 0),   // September 23, 2024 at 2:00 PM
        },
    ]);

    return (
        <div className="my-calendar">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500}}
            />
        </div>
    )
}
