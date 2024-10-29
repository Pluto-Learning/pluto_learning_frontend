import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { addTableMember, createTable, fetchCourse } from '@/app/api/crud';
import { useSession } from 'next-auth/react';

export default function StepOne({ onNextStep }) {

  const { data: session } = useSession()
  console.log('session: ', session)

  const [formData, setFormData] = useState({
    roomId: 'string',
    roomName: '',
    courseId: '',
    meetingTime: '',
    meetingDay: '',
    privacyStatus: 'string',
    tableType: '',
    shortDescription: '',
    longDescription: '',
    roomImg: 'string',
    lastActive: new Date().toISOString(), // Automatically set lastActive to the current date in ISO 8601
    status: 'active',
  });

  const [courses, setCourses] = useState([]); // For storing courses from the API
  const tableTypes = ['Study Group', 'Organization Event', 'Professor Specific']; // Example table types

  // Function to format the date to the required format for 'datetime-local'
  const formatDateForInput = (date) => {
    const d = new Date(date);
    const formattedDate = d.toISOString().slice(0, 16); // Slice to get "YYYY-MM-DDTHH:MM"
    return formattedDate;
  };

  // Fetch course options from external API
  useEffect(() => {
    const getAllCourse = async () => {
      try {
        const response = await fetchCourse(); // Replace with your API endpoint
        setCourses(response);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    getAllCourse();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'meetingTime') {
      // Set meetingDay based on meetingTime and format meetingTime correctly
      const meetingDay = new Date(value).toLocaleDateString('en-US', { weekday: 'long' });
      setFormData({
        ...formData,
        meetingTime: formatDateForInput(value), // Format meetingTime to "YYYY-MM-DDTHH:MM"
        meetingDay,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle Create Table
  const handleCreateTable = async () => {
    try {
      const responseData = await createTable(formData);
      console.log('Response Data:', responseData);
      await addTableMember({
        memberId: session?.user?.id,
        roomId: responseData?.roomId,
        role: "student"
      })
      onNextStep(); // Proceed to step 2 on success
    } catch (error) {
      console.error("Error creating Table:", error);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleCreateTable();
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="mb-3">
        <label htmlFor="roomName" className="form-label">Room Name</label>
        <input type="text" className="form-control" id="roomName" name="roomName" value={formData.roomName} onChange={handleChange} required />
      </div>

      <div className="mb-3">
        <label htmlFor="courseId" className="form-label">Course</label>
        <select className="form-select" id="courseId" name="courseId" value={formData.courseId} onChange={handleChange} required>
          <option value="" disabled>Select Course</option>
          {courses.map(course => (
            <option key={course.courseId} value={course.courseId}>{course.courseName}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="meetingTime" className="form-label">Meeting Time</label>
        <input
          type="datetime-local"
          className="form-control"
          id="meetingTime"
          name="meetingTime"
          value={formData.meetingTime}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="meetingDay" className="form-label">Meeting Day (Auto-set)</label>
        <input type="text" className="form-control" id="meetingDay" name="meetingDay" value={formData.meetingDay} readOnly />
      </div>

      <div className="mb-3">
        <label htmlFor="tableType" className="form-label">Table Type</label>
        <select className="form-select" id="tableType" name="tableType" value={formData.tableType} onChange={handleChange} required>
          <option value="" disabled>Select Table Type</option>
          {tableTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="shortDescription" className="form-label">Short Description</label>
        <textarea className="form-control" id="shortDescription" name="shortDescription" value={formData.shortDescription} onChange={handleChange} required />
      </div>

      <div className="mb-3">
        <label htmlFor="longDescription" className="form-label">Long Description</label>
        <textarea className="form-control" id="longDescription" name="longDescription" value={formData.longDescription} onChange={handleChange} required />
      </div>

      <button type="submit" className="btn pluto-pink-btn">Submit</button>
    </form>
  );
}
