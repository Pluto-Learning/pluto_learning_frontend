'use client'
import Footer from '@/components/common/Footer'
import HomeNavbar from '@/components/navbar/HomeNavbar'
import React from 'react'
import { useRouter } from 'next/navigation';

export default function HomeLayout({ children }) {
    const router = useRouter()

    console.log('router: ', router)
    
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
