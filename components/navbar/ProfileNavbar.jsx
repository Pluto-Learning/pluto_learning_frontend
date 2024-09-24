import React from 'react'


export default function ProfileNavbar() {
    return (
        <div className='profile-navbar'>
            <div className="logo">
                <img src={'/assets/images/pluto-profile-logo.png'} alt="" className='img-fluid' />
            </div>
            <div className='user-dropdown'>
                <div class="dropdown">
                    <button class="btn dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="user-img rounded-pill">
                            <img src={'/assets/images/donDang.jpg'} alt="" className='img-fluid rounded-pill'/>
                        </div>
                        <span className='user-name'>Ethan Devnath</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
