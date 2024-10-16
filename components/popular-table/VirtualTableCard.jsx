"use client"
import { FetchTableMembersDetailsById } from '@/app/api/crud'
import { Avatar, AvatarGroup, Tooltip } from '@mui/material'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import JoinATablePopup from '../JoinATablePopup';

export default function VirtualTableCard({ tableData = {} }) {

    const { data: session, status } = useSession();

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


    const [tableMembersDetailsById, setTableMembersDetailsById] = useState(null)
    console.log("tableMembersDetailsById: ", tableMembersDetailsById)


    const getTableMembersDetailsById = async () => {
        try {
            const data = await FetchTableMembersDetailsById(roomId);
            setTableMembersDetailsById(data);
        } catch (error) {
            console.error("Error TableMembers Details:", error);
        }
    };

    useEffect(() => {
        getTableMembersDetailsById()
    }, [])


    return (
        <>
            <div class="popular-table-card card h-100">
                <div class="card-body">
                    <div className="status">
                        <span className="status-light available"></span>
                        <span className='status-title'>Availabe</span>
                    </div>
                    <div className="card-img">
                        <img src={roomImg ? roomImg : "/assets/images/recent-tables/recent-table-1.png"} alt="" className='img-fluid card-img-top' />
                    </div>
                    <div className="card-info">
                        <h4 className="card-title table-name" data-bs-toggle="modal" data-bs-target={`#joinTable-${roomId}`}>{roomName}</h4>
                        <p className="college-name">{college}</p>
                        <p className="description">{shortDescription}</p>
                    </div>
                </div>
                <div className="card-footer border-0">
                    <div className="avatar">
                        <AvatarGroup max={4}>
                            {
                                tableMembersDetailsById && tableMembersDetailsById?.length > 0 && tableMembersDetailsById?.map((item) => {
                                    return (
                                        <Tooltip title={item?.firstName} placement="top-start" arrow>
                                            <Avatar alt={item?.firstName} src={item?.profilePicture} />
                                        </Tooltip>
                                    )
                                })
                            }
                            {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" /> */}
                        </AvatarGroup>
                    </div>
                    <button className="btn invite-btn">
                        + Invite Friends
                    </button>
                </div>
            </div>

            {/* <div class="modal fade join-table-modal" id="joinTable" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <div>
                                    <h5 class="modal-title" id="exampleModalLabel">Welcome Back, {session?.user?.name}</h5>
                                    <p>Take a look your learning progress for today September 22, 2024</p>
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <JoinATablePopup session={session} />
                            </div>
                        </div>
                    </div>
                </div> */}
        </>
    )
}
