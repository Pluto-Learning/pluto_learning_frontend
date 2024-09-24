"use client"
import Link from "next/link";
import React, { Component, useState } from "react";


export default function Signin() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "AdarshT") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <div className="login-form-container">
      <div className="row g-0">
        <div className="col-lg-6">
          <div className="login-welcome-bg" style={{backgroundImage: "url('/assets/images/loginform-bg.svg')"}}>
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

            {/* <div className="bar">

            </div> */}

            <p className="connectGrowexplore">
              connect. grow. explore
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-bg">
            <div className="form-bg-content">
              <h3>Welcome Back!</h3>
              <div className="secondsText">
                {/* <div>
              {`You are only T-Minus 10 seconds away from an \n educational experience like no other, log in on Pluto\n now and see the difference!`
                .split("\n")
                .map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
            </div> */}
                <p>You are only T-Minus 10 seconds away from an educational experience like no other, log in on Pluto now and see the difference!</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="User ID"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="text-center forgot-password">
                  <p className="mb-0">
                    <a href="/">Forgot Password?</a>
                  </p>
                  <p className="mb-0">
                    <p><Link href="/signup">Don't have an account?</Link></p>
                  </p>
                </div>
                <div className="startExploring">
                  <button type="button" className="btn submit-btn">
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