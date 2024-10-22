"use client"
import { createCourse, createCourseSectionBinding, deleteCourse, fetchAllCourseSectionDetails, fetchCourse, fetchCourseById, fetchCourseSectionDetailsById, fetchGetAllCourseSectionMapping, fetchSection, updateCourse, updateCourseSection } from '@/app/api/crud';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

export default function page() {

    const { data: session } = useSession()
    console.log('session: ', session)

    const [isUpdateing, setIsUpdateing] = useState(false);
    // const [currentCourseId, setCurrentCourseId] = useState(null);
    const [currentCourseSectionId, setCurrentCourseSectionId] = useState(null);
    const [allCourseSectionDetails, setAllCourseSectionDetails] = useState([]);

    const [course, setCourse] = useState([])
    const [sections, setSections] = useState([])

    const [formData, setFormData] = useState({
        // courseSectionId: '',
        courseId: '',
        sectionId: '',
        createBy: '',
        updateBy: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCreate = async (e) => {
        try {
            await createCourseSectionBinding(formData);
            resetForm();
            getAllCourseSectionDetails();
        } catch (error) {
            console.error("Error Course Sectin Binding:", error);
        }
    };

    const handleDelete = async (id) => {
        await deleteCourse(id);
        console.log(id)
        // getAllCourse();
    }

    const handleUpdate = async () => {
        try {
            await updateCourseSection(currentCourseSectionId, formData);  // Pass the current course ID and form data
            resetForm();   // Reset the form after update
            getAllCourseSectionDetails();  // Refresh the course list
            console.log('sssssssssssssss',currentCourseSectionId, formData)
        } catch (error) {
            console.error("Error updating course:", error);
        }
    };

    const getAllCourseSectionDetails = async () => {
        try {
            const data = await fetchAllCourseSectionDetails();
            setAllCourseSectionDetails(data);
        } catch (error) {
            console.error('Error fetching universities:', error);
        }
    }

    const getCourseSectionBindingById = async (id) => {
        try {
            setIsUpdateing(true);
            setCurrentCourseSectionId(id);
            const data = await fetchCourseSectionDetailsById(id);
            console.log(id)
            console.log(data)

            setFormData({
                courseSectionId: data?.courseSectionId,
                courseId: data?.courseId,
                sectionId: data?.sectionId,
                createBy: '',
                updateBy: '',
            });

        } catch (error) {
            console.error("Error fetching university by ID:", error);
        }
    };

    const getAllCourse = async () => {
        try {
            const data = await fetchCourse();
            setCourse(data);
        } catch (error) {
            console.error('Error fetching Course:', error);
        }
    }

    const getAllSection = async () => {
        try {
            const data = await fetchSection();
            setSections(data);
        } catch (error) {
            console.error('Error fetching universities:', error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isUpdateing) {
            await handleUpdate();
        } else {
            await handleCreate();
        }

        // console.log(formData)

        // Close the modal after submission
        const modalElement = document.getElementById('exampleModal');
        const modalInstance = bootstrap.Modal.getInstance(modalElement); // Get the modal instance
        modalInstance.hide(); // Hide the modal
    };

    useEffect(() => {
        getAllCourseSectionDetails();
        getAllCourse();
        getAllSection();
    }, []);

    // useEffect(() => {
    //     setFormData((prev) => ({
    //         ...prev,
    //         createBy: session?.user?.id,
    //         updateBy: session?.user?.id,
    //     }));
    // }, [session]);

    const resetForm = () => {
        setFormData({
            courseSectionId: '',
            courseId: '',
            sectionId: '',
            createBy: '',
            updateBy: '',
        });
        setIsUpdateing(false);
        setCurrentCourseSectionId(null);
    };

    console.log('formData: ', formData)

    return (
        <div className='university-list'>
            <h1>Course Section Details</h1>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h4>Course Section Details</h4>
                            <div>
                                <button className='btn btn-sm pluto-blue-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">Create +</button>
                            </div>
                        </div>
                        <div className=" table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" className='text-center'>SL</th>
                                        <th scope="col" className='text-center'>course Section Id</th>
                                        <th scope="col" className='text-center'>course Id</th>
                                        <th scope="col" className='text-center'>section Id</th>
                                        <th scope="col" className='text-center'>course Name</th>
                                        <th scope="col" className='text-center'>course Number</th>
                                        <th scope="col" className='text-center'>college</th>
                                        <th scope="col" className='text-center'>year Of Course</th>
                                        <th scope="col" className='text-center'>section Number</th>
                                        <th scope="col" className='text-center'>section Name</th>
                                        <th scope="col" className='text-center'>section Start Time</th>
                                        <th scope="col" className='text-center'>section EndT ime</th>
                                        <th scope="col" className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allCourseSectionDetails && allCourseSectionDetails?.length > 0 &&
                                        allCourseSectionDetails?.map((item, index) => {
                                            const { id,
                                                courseSectionId,
                                                courseId,
                                                sectionId,
                                                courseName,
                                                courseNumber,
                                                college,
                                                yearOfCourse,
                                                sectionNumber,
                                                sectionName,
                                                sectionStartTime,
                                                sectionEndTime } = item;
                                            return (
                                                <tr>
                                                    <td scope="row" className='text-center'>{index + 1}</td>
                                                    <td className='text-center'>{courseSectionId}</td>
                                                    <td className='text-center'>{courseId}</td>
                                                    <td className='text-center'>{sectionId}</td>
                                                    <td className='text-center'>{courseName}</td>
                                                    <td className='text-center'>{courseNumber}</td>
                                                    <td className='text-center'>{college}</td>
                                                    <td className='text-center'>{yearOfCourse}</td>
                                                    <td className='text-center'>{sectionNumber}</td>
                                                    <td className='text-center'>{sectionName}</td>
                                                    <td className='text-center'>{sectionStartTime}</td>
                                                    <td className='text-center'>{sectionEndTime}</td>
                                                    <td className='text-center'>
                                                        <div className="btn-wrapper d-grid gap-2 d-md-block">
                                                            <button
                                                                className='btn btn-sm pluto-yellow-btn me-md-2'
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal"
                                                                onClick={() => getCourseSectionBindingById(item.courseSectionId)}
                                                            >Update</button>
                                                            <button className='btn btn-sm pluto-pink-btn' onClick={() => handleDelete(courseId)}>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                                        {isUpdateing ? "Update Course" : "Create Course"}
                                    </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        {/* <div class="mb-3">
                                            <label for="course-id" class="form-label" >Course Section ID</label>
                                            <input type="text" class="form-control" id="course-id" aria-describedby="emailHelp" onChange={handleChange} value={formData.courseSectionId} name={'courseSectionId'} />
                                        </div> */}
                                        <div class="mb-3">
                                            <label for="course-name" class="form-label" >course</label>
                                            {/* <input type="text" class="form-control" id="course-name" aria-describedby="emailHelp" onChange={handleChange} value={formData.courseName} name={'courseName'} /> */}
                                            <select class="form-select" aria-label="Default select example" onChange={handleChange} value={formData.courseId} name="courseId">
                                                <option value="">Select Course</option>
                                                {
                                                    course && course?.length > 0 && course?.map((item) => {
                                                        return (
                                                            <option value={item?.courseId} >{item?.courseName}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label for="course-number" class="form-label" >Section</label>
                                            {/* <input type="text" class="form-control" id="course-number" aria-describedby="emailHelp" onChange={handleChange} value={formData.courseNumber} name={'courseNumber'} /> */}
                                            <select class="form-select" aria-label="Default select example" onChange={handleChange} value={formData.sectionId} name="sectionId">
                                                <option value="">Select Section</option>
                                                {
                                                    sections && sections?.length > 0 && sections?.map((item) => {
                                                        return (
                                                            <option value={item?.sectionId} >{item?.sectionId}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        {/* <div class="mb-3">
                                            <label for="college" class="form-label" >college</label>
                                            <input type="text" class="form-control" id="college" aria-describedby="emailHelp" onChange={handleChange} value={formData.college} name={'college'} />
                                        </div>
                                        <div class="mb-3">
                                            <label for="yearOfCourse" class="form-label">Year of Course</label>
                                            <select class="form-select" id="yearOfCourse" aria-label="Select year of course" onChange={handleChange} value={formData.yearOfCourse} name="yearOfCourse">
                                                <option value="">Year of Course</option>
                                                <option value="freshman">Freshman</option>
                                                <option value="sophomore">Sophomore</option>
                                                <option value="junior">Junior</option>
                                                <option value="senior">Senior</option>
                                            </select>
                                        </div> */}
                                        <button type="submit" className="btn btn-primary">{isUpdateing ? "Update" : "Create"}</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
