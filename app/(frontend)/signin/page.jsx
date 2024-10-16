"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, getSession } from "next-auth/react";
import { fetchUserProfileById } from "@/app/api/crud";

export default function Signin() {

  const [isSetProfile, setIsSetProfile] = useState(null)

//   const getUserData = async () => {
//     if (currentUserId) {
//         const data = await fetchUserProfileById();
//         setSingleUserProfile(data);
//     }
// };

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sign in using NextAuth
    let nextAuthData = await signIn("credentials", {
      ...formData,
      redirect: false // prevent auto redirect
    });

    console.log('nextAuthData: ', nextAuthData)

    if (nextAuthData?.ok) {
      // Manually refresh session to update without page reload
      const session = await getSession();
      // console.log("Session updated after sign-in:", session);

      const userProfileData = await fetchUserProfileById(session?.user?.id);

      // console.log("Session updated after sign-in:", userProfileData);
      if(userProfileData) {
        // Redirect to desired page
        await getSession();
        router.push('/popular-table');
      } else {
        await getSession();
        router.push('/profile/edit/info');
      }


    } else {
      console.log("Login failed:", nextAuthData.error);
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
                  {/* <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                  </div> */}

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
                  <p className="">
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
