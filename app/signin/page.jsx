"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios'; // Import Axios
import { routes } from "@/utils/route";

export default function Signin() {
  // State to store form data
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const router = useRouter(); // Initialize the router for navigation

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(routes.login, formData, { // Use the route from routes.js
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const { token, userName } = response.data; // Destructure the response data
      localStorage.setItem('token', token); // Save the JWT token in localStorage
      localStorage.setItem('userName', userName); // Save the username if needed
      router.push('/dashboard'); // Redirect to the dashboard or any other protected route
    } catch (error) {
      if (error.response) {
        alert(`Login failed: ${error.response.data.message || 'Please check your credentials.'}`); // Show appropriate error message
      } else {
        console.error('Error logging in:', error);
        alert('An error occurred. Please try again.'); // Display a generic error message
      }
    }
  };

  return (
    <div className="login-form-container">
      <div className="row g-0">
        <div className="col-lg-6">
          <div className="login-welcome-bg" style={{ backgroundImage: "url('/assets/images/loginform-bg.svg')" }}>
            <div className='nav-bar_logo'>
              <Link href="/">
                <img src={'/assets/images/plutologo.svg'} alt='logo' />
              </Link>
            </div>

            <p className="NiceToSeeYou">NICE TO SEE YOU AGAIN</p>
            <h1 className="WelcomeBack">WELCOME BACK</h1>
            <p className="connectGrowexplore">connect. grow. explore</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-bg">
            <div className="form-bg-content">
              <h3>Welcome Back!</h3>
              <div className="secondsText">
                <p>You are only T-Minus 10 seconds away from an educational experience like no other, log in on Pluto now and see the difference!</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Username"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>

                <div className="text-center forgot-password">
                  <p className="mb-0">
                    <a href="/">Forgot Password?</a>
                  </p>
                  <p className="mb-0">
                    <Link href="/signup">Don't have an account?</Link>
                  </p>
                </div>
                <div className="startExploring">
                  <button type="submit" className="btn submit-btn">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
