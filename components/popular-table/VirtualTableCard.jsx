import { Avatar, AvatarGroup } from '@mui/material'
import React from 'react'

export default function VirtualTableCard({allTableDetails}) {
    return (
        <>
            <div class="popular-table-card card h-100" data-bs-toggle="modal" data-bs-target="#joinTable">
                <div class="card-body">
                    <div className="status">
                        <span className="status-light available"></span>
                        <span className='status-title'>Availabe</span>
                    </div>
                    <div className="card-img">
                        <img src="/assets/images/recent-tables/recent-table-1.png" alt="" className='img-fluid card-img-top' />
                    </div>
                    <div className="card-info">
                        <h4 className="card-title table-name">CSE 1320 - Programming</h4>
                        <p className="college-name">College of Engineering</p>
                        <p className="description">Embark on a gastronomic journey around the world. Share recipes, cooking tips, and savor diverse flavors together!</p>
                    </div>
                </div>
                <div className="card-footer border-0">
                    <div className="avatar">
                        <AvatarGroup max={4} total={24}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                        </AvatarGroup>
                    </div>
                    <button className="btn invite-btn">
                        + Invite Friends
                    </button>
                </div>
            </div>
        </>
    )
}
