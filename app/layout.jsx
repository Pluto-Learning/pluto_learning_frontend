'use client'
// import localFont from "next/font/local";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this line is added

import 'remixicon/fonts/remixicon.css'
import NextAuthProvider from "@/Providers/NextAuthProvider";

import { RoomProvider } from "../utils/liveblocks.config";
import { ToastContainer } from "react-toastify";
import { createClient } from "@liveblocks/client";

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/styles/style.css" />
      </head>
      <body>
          <NextAuthProvider>
            <main>
              {children}
              <ToastContainer />
            </main>
          </NextAuthProvider>
      </body>
    </html>
  );
}
