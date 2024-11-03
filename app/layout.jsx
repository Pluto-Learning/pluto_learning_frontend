'use client'
import localFont from "next/font/local";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import store from "../store";
import NextAuthProvider from "../Providers/NextAuthProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PreLoader from "../components/PreLoader";
import Loader from "../components/Loader/Loader";
import Script from "next/script";

import { ToastContainer } from "react-toastify";

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
