'use client'
// import localFont from "next/font/local";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
// import { Provider } from "react-redux";
// import store from "@/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this line is added
// import PreLoader from "@/components/PreLoader";
// import Loader from "@/components/Loader/Loader";
// import Script from "next/script";
import { ToastContainer } from "react-toastify";
import NextAuthProvider from "@/Providers/NextAuthProvider";


export default function RootLayout({ children }) {


  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 3500)
  // }, [])

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-LT2MYfFqS4w/40kF+9AEkTZF5A5SnkmGbKiWqXyZW8eD6eOgI2XyZPeCxlTV3y2p"
          crossOrigin="anonymous" // Use crossOrigin instead of crossorigin
        /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
        <link rel="stylesheet" href="/assets/styles/style.css" />
      </head>
      <body>
        {/* <Provider store={store}> */}
        <NextAuthProvider>
          <main>
            {children}
            <ToastContainer />
          </main>

        </NextAuthProvider>
        {/* </Provider> */}
        {/* <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          strategy="lazyOnload"
          crossOrigin="anonymous" // Use crossOrigin instead of crossorigin
        ></Script> */}
      </body>
    </html>
  );
}
