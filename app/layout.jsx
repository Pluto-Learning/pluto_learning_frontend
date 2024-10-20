"use client";
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import store from "@/store";
import NextAuthProvider from "@/Providers/NextAuthProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this line is added
import { useEffect, useState } from "react";
import PreLoader from "@/components/PreLoader";


export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous" // Use crossOrigin instead of crossorigin
        /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/styles/style.css" />
      </head>
      <body>
        <Provider store={store}>
          <NextAuthProvider>
            {
              !loading ? (
                <main>
                  <ToastContainer />
                  {children}
                </main>
              ) : (
                <PreLoader />
              )
            }

          </NextAuthProvider>
        </Provider>
        {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous" // Use crossOrigin instead of crossorigin
        ></script> */}
      </body>
    </html>
  );
}
