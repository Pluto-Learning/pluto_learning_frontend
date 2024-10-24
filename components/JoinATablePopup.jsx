'use state'
import { addTableMember, updateTableLastTime } from '@/app/api/crud';
import { Rating } from '@mui/material'
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function JoinATablePopup({ tableData = {} }) {

    const router = useRouter()
    const { data: session } = useSession();
    console.log('join table session', session)

    const {
        roomId,
        roomName,
        meetingTime,
        meetingDay,
        privacyStatus,
        tableType,
        shortDescription,
        longDescription,
        roomImg,
        // status,
        courseId,
        courseName,
        courseNumber,
        college,
        yearOfCourse,
        description1,
        description2,
        description3,
        description4
    } = tableData;

    const [formData, setFormData] = useState({
        memberId: '',
        roomId: '',
        role: "student"
    });

    console.log('setFormDatasetFormData:', formData)

    useEffect(() => {
        setFormData({
            memberId: session?.user?.id,
            roomId: roomId,
            role: "student"
        })
    }, [tableData, session])

    const updateTableLastActive = async () => {
        try {
            await updateTableLastTime(roomId)
        } catch (error) {
            console.error("Error Update Table Last Active:", error);
        }
    }

    const handleJoinMember = async (e) => {
        try {
            await addTableMember(formData);
            toast.success("Successfully joined");
            // Navigate to the virtual table
            router.push(`/virtual-table/${roomId}`);
            updateTableLastActive()
        } catch (error) {
            console.error("Error Join Table:", error);
        }
    };
    
    
    
    


    return (
        <div className='join-table-popup-content'>
            <div className="card">
                <div className="card-body">
                    <div className="course-details">
                        <h5>{roomName}</h5>
                        <p>{longDescription}</p>
                        <div className="rating d-flex align-items-center">
                            <div>
                                <span>4.0</span>
                                <Rating name="size-small" defaultValue={2} size="small" />
                            </div>
                            <p className='mb-0'>1325 rating</p>
                        </div>
                        <div className="course-info-wrapper ">
                            <div className="course-info-course-author">
                                <div className="course-info-course-author-img">
                                    <img src="" alt="" />
                                </div>
                                <p className="course-info-course-author-name">Nadia Mumtahena</p>
                            </div>
                            <div className="course-info-course-number">

                            </div>
                            <div className="course-info-course-duration"></div>
                        </div>

                        <div className="what-you-learn">
                            <div className="card">
                                <div className="card-body">
                                    <h5>what you'll learn</h5>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className='what-you-learn-text'>Learn how to motivate and engage anyone by learning the psychology that underpins human behavior.</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className='what-you-learn-text'>Learn how to motivate and engage anyone by learning the psychology that underpins human behavior.</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className='what-you-learn-text'>Learn how to motivate and engage anyone by learning the psychology that underpins </p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className='what-you-learn-text'>Learn how to motivate and engage anyone by learning the psychology that underpins </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="btn-wrapper text-center">
                            {/* <a
                                href={`/virtual-table/${roomId}`}
                                target='_blank'
                                type='button'
                                className="btn pluto-deep-blue-btn"
                            >
                                Join
                            </a> */}
                            <button className="btn pluto-deep-blue-btn" onClick={handleJoinMember} data-bs-dismiss="modal" aria-label="Close">Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
