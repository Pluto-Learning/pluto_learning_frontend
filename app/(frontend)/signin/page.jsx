"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/slices/authSlice";
import { toast } from "react-toastify";
import { loginUser } from "@/app/api/auth";
import { setCookie } from "cookies-next";
// import { setCookie } from 'cookie-next'; // Import the setCookie function
// import { routes } from '../utils/routes'; // Import routes
import { signIn } from "next-auth/react"

export default function Signin() {

  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    userName: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
// components/Signin.jsx

const handleSubmit = async (e) => {
  e.preventDefault();
  let nextAuthData=await signIn("credentials", {
    ...formData,
    redirect:false
  })
  console.log(nextAuthData)
  if(nextAuthData?.ok==true){
     router.push('/popular-table')
  }
  // try {
  //   const data = await loginUser(formData); // Your API call
  //   if (data && data.token) {
  //     // Dispatch the login action
  //     dispatch(login({ user: data.userName, token: data.token }));

  //     // Set cookies manually (though it's done in the reducer too)
  //     setCookie('user', data.userName);
  //     setCookie('token', data.token);

  //     toast.success('Login successful!');
  //     router.push('/popular-table');
  //   } else {
  //     toast.error('Login failed.');
  //   }
  // } catch (error) {
  //   console.error(error);
  //   toast.error('An error occurred. Please try again.');
  // }
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
