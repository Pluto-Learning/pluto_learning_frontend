"use client"
// app/backend/layout.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Avatar, Badge, styled } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const BackendLayout = ({ children }) => {

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettingsDropdown = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  console.log('isSettingsOpen: ', isSettingsOpen)


  const [collapse, setCollapse] = useState(false)

  console.log('collapse: ', collapse)

  return (
    
    <div className='backendLayout'>
      <div class="wrapper">
        {/* <!-- Sidebar  --> */}
        <nav id="sidebar" class={` ${collapse ? 'active' : ''}`}>
          <div class="sidebar-header">
            <div className="sidebar-logo">
              <Link href="/">
                <img src="/assets/images/pluto-profile-logo.png" alt="" className='img-fluid' />
              </Link>
            </div>
          </div>

          <ul class="list-unstyled components">
            <li class="nav-item">
              <Link class="nav-link" href="/backend/dashboard">Dashboard</Link>
            </li>
            {/* <li class="">
              <a href="#homeSubmenu" data-bs-toggle="collapse" aria-expanded="false"
                class="dropdown-toggle d-flex justify-content-between">Home <i
                  class="fa-solid fa-chevron-down"></i></a>
              <ul class="collapse list-unstyled dropdown__lvl1" id="homeSubmenu">
                <li>
                  <a href="#">Home 1</a>
                </li>
                <li>
                  <a href="#">Home 2</a>
                </li>
                <li>
                  <a href="#">Home 3</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href="#pageSubmenu" data-bs-toggle="collapse" aria-expanded="false"
                class="dropdown-toggle d-flex justify-content-between">Settings
                <i class="fa-solid fa-chevron-down"></i></a>
              <ul class="collapse list-unstyled dropdown__lvl1" id="pageSubmenu">
                <li className="nav-item">
                  <Link href="/backend/settings/university" className="nav-link ps-4">
                    University
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/backend/settings/section" className="nav-link ps-4">
                    Section
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/backend/settings/course" className="nav-link ps-4">
                    Course
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link href="/backend/settings/course-section-mapping" className="nav-link ps-4">
                    Course Section Mapping
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link href="/backend/settings/course-section-details" className="nav-link ps-4">
                    Course Section Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/backend/settings/student-course-section-details" className="nav-link ps-4">
                    Student Course Section Details
                  </Link>
                </li>
                {/* <li>
                  <a href="#lvl2sub" data-bs-toggle="collapse"
                    class="d-flex align-items-center justify-content-between" aria-expanded="false">Page 1
                    <i class="fa-solid fa-chevron-down"></i></a>
                  <ul class="collapse list-unstyled dropdown__lvl2" id="lvl2sub">
                    <li>
                      <a href="#">Page lvl2 1</a>
                    </li>
                    <li>
                      <a href="#">Page lvl2 2</a>
                    </li>
                    <li>
                      <a href="#">Page lvl2 3</a>
                    </li>
                  </ul>
                </li> */}

              </ul>
            </li>
          </ul>
        </nav>

        {/* <!-- Page Content  --> */}
        <div id="content" class={` ${collapse ? 'active' : ''}`}>

          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

              <button type="button" id="sidebarCollapse" class={`btn toggle-btn`} onClick={() => setCollapse((prev) => !prev)}>
                <i class="fas fa-align-left me-2"></i>
                <span>Toggle Sidebar</span>
              </button>
              <button class="btn btn-dark d-inline-block d-lg-none ms-auto" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-align-justify"></i>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Page</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Page</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Page</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Page</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <main>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default BackendLayout;
