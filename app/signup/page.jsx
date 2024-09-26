"use client"
import Link from "next/link";
import React, { Component, useState } from "react";
// import Background from "../../assets/signup_background.svg";
// import plutoLogo from "../../assets/plutologo.png";
// import logo from '../../assets/plutologo.svg'
// import { Link } from "react-router-dom";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  // const handleSubmit = (e) => {
  //   if (userType == "Admin" && secretKey != "AdarshT") {
  //     e.preventDefault();
  //     alert("Invalid Admin");
  //   } else {
  //     e.preventDefault();
  //     console.log('', fname, lname, email, password);
  //     fetch("http://localhost:5000/register", {
  //       method: "POST",
  //       crossDomain: true,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({
  //         fname,
  //         email,
  //         lname,
  //         password,
  //         userType,
  //       }),

  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data, "userRegister");
  //         if (data.status == "ok") {
  //           alert("Registration Successful");
  //         } else {
  //           alert("Something went wrong");
  //         }
  //       });
  //   }
  // };


  // State to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    keepSignedIn: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data, e.g., send to API or validate
    console.log(formData);
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

            <p className="NiceToSeeYou">
              NICE TO SEE YOU AGAIN
            </p>
            <h1 className="WelcomeBack">
              WELCOME BACK
            </h1>

            <p className="connectGrowexplore">
              connect. grow. explore
            </p>


          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-bg">

            <div className="form-bg-content">

              <h3>Sign-Up Now!</h3>
              <div className="secondsText">
                <div>
                  <p>You are only T-Minus 10 seconds away from an educational experience like no other, log in on Pluto now and see the difference!</p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="firstName form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="lastName form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="email form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="E-mail"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="password"
                      className="password form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="text-center forgot-password mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="keepSignedIn"
                        checked={formData.keepSignedIn}
                        onChange={handleChange}
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Keep me signed in
                      </label>
                    </div>
                    <p className="mb-0">
                      <a href="/signin">Already a member?</a>
                    </p>
                  </div>
                </div>

                <div className="startExploring">
                  <button type="submit" className="btn submit-btn">
                    Start Exploring
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