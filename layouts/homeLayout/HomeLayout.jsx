import Footer from '@/components/common/Footer'
import HomeNavbar from '@/components/navbar/HomeNavbar'
import React from 'react'

export default function HomeLayout({ children }) {
    return (
        <>
            <div className="home-layout">
                <HomeNavbar />
                {children}
                <Footer />
            </div>
        </>
    )
}
