import React from 'react';
import newVideo from '../assets/new.mp4';
import abc from '../assets/abc.png'; // Used for all step images
import { APP_FEATURES } from '../utils/data';
import { LuSparkles } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Modal from '../components/Modal';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import ProfileInfoCard from '../components/Cards/ProfileInfoCard';

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="w-full min-h-full bg-[#fffcef]">
        <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0" />

        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          {/*header*/}
          <header className="flex justify-between items-center mb-16">
            <div className="text-xl text-black font-bold">
              Interview Prep AI
            </div>
            {user ? (
              <ProfileInfoCard />
            ) : (<button
              className="bg-linear-to-r from-[#ff9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer"
              onClick={() => setOpenAuthModal(true)}
            >
              Login / Sign Up
            </button>)}
          </header>

          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex items-center justify-left mb-2">
                <div className="flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300 ">
                  <LuSparkles /> AI Powered
                </div>
              </div>
              <h1 className="text-5xl text-black font-medium mb-6 leading-tight">
                Ace Interviews with <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                  AI-Powered
                </span>{""}
                Learning
              </h1>
            </div>

            <div className="w-full md:w-1/2">
              <p className="text-[17px] text-gray-900 mr-0 md:mr-20 mb-6">
                Get role-specific interview, expand answers when you need them,
                divedeeper into concepts, and organize everything your way.
                From preparation to mastery your ultimate inerview toolkit is
                here.
              </p>

              <button className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full relative z-10 ">
        <div>
          <section className="flex items-center justify-center -mt-36">
            <video
              src={newVideo}
              alt="new"
              autoPlay
              loop
              muted
              playsInline
              className="w-[50vw] rounded-lg shadow-2xl"
            />
          </section>
        </div>

        <div className="w-full mon-h-full bg-[#FFFCEF] mt-10">
          <div className="container mx-auto px-4 pt-10 pb-20">
            <section className="mt-5">
              <h2 className="text-2xl font-medium text-center mb-12">
                Features That Make You Shine
              </h2>

              <div className="flex flex-col items-center gap-8">
                {/*First 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100 "
                    >
                      <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/*Remaining 2 cards*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100 "
                    >
                      <h3 className="text-base font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* --- NEW SECTION: HOW IT WORKS --- */}
        <div className="w-full mon-h-full bg-[#fffcef] py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-6xl font-bold text-center mb-16 text-black">
              How does it work?
            </h2>
            <div className="flex justify-center">
              <div className="flex flex-col gap-8 w-full max-w-lg">

                {/* Step 1: Login & Create a Session */}
                <div className="bg-[#FFFEF8] p-6 rounded-xl border border-amber-100 hover:border-amber-300 transition-colors duration-300 shadow-xs">
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    1. Login & Create a Session
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Start by logging in, then create a new session to begin your AI-powered task.
                  </p>
                  <video
                    src={newVideo}
                    alt="Login & Create Session Demo"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-lg border border-amber-200 mt-2"
                  />
                </div>

                {/* Step 2: Create Specific Domain Session */}
                <div className="bg-[#FFFEF8] p-6 rounded-xl border border-amber-100 hover:border-amber-300 transition-colors duration-300 shadow-xs">
                   <h3 className="text-xl font-semibold mb-2 text-black">
                     2. Create Specific Domain Session
                   </h3>
                   <p className="text-gray-700 mb-4">
                     Choose your interview topic and start a tailored session.
                   </p>
                   <video
                    src={newVideo}
                    alt="Login & Create Session Demo"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-lg border border-amber-200 mt-2"
                  />
                </div>

                {/* Step 3: Open Session and See Questions */}
                <div className="bg-[#FFFEF8] p-6 rounded-xl border border-amber-100 hover:border-amber-300 transition-colors duration-300 shadow-xs">
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    3. Open Session and See Questions
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Access your session and view the AI-generated questions.
                  </p>
                  <video
                    src={newVideo}
                    alt="Login & Create Session Demo"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-lg border border-amber-200 mt-2"
                  /></div>

                {/* Step 4: Configure and Run */}
                 <div className="bg-[#FFFEF8] p-6 rounded-xl border border-amber-100 hover:border-amber-300 transition-colors duration-300 shadow-xs">
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    4. Configure and Run
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Choose low, medium, or high reasoning depth and let the agent work.
                  </p>
                  <video
                    src={newVideo}
                    alt="Login & Create Session Demo"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-lg border border-amber-200 mt-2"
                  /></div>
                  
                  <div className="text-xl bg-amber-50 text-secondary text-center p-5 mt-5">
                    Made with ❤️... Happy Coding
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && (
            <Login setCurrentPage={setCurrentPage} />
          )}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  )
}

export default LandingPage;