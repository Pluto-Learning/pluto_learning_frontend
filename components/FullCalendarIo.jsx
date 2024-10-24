"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from "@fullcalendar/core";

const Calendar = ({ studentCourseSection }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Format events from props
    const formattedEvents = studentCourseSection.map(item => ({
        id: item.id || `${item.sectionStartTime}-${item.courseName || item.courseNumber}`,
        title: item.courseName || item.courseNumber,
        allDay: false,
        start: new Date(item.sectionStartTime),
        end: new Date(item.sectionEndTime),
    }));

    // Handle event click to show details
    const handleEventClick = (selected) => {
        setSelectedEvent(selected.event);
    };

    // Close the event details popup
    const handleClosePopup = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="full-calendar">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                }}
                initialView="dayGridMonth"
                editable={false} // No event dragging or editing
                selectable={false} // No date selection
                events={formattedEvents} // Events come from props
                eventClick={handleEventClick} // Show event details on click
                height="80vh"
            />

            {/* Popup for Event Details with Transition */}
            {selectedEvent && (
                <div className="modal show d-block transition full-calendar-modal" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedEvent.title}</h5>
                                <button type="button" className="btn-close" onClick={handleClosePopup}></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    <strong>Start:</strong> {formatDate(selectedEvent.start, { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" })}
                                </p>
                                <p>
                                    <strong>End:</strong> {formatDate(selectedEvent.end, { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" })}
                                </p>
                                <p>
                                    <strong>All Day:</strong> {selectedEvent.allDay ? "Yes" : "No"}
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClosePopup}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;
