import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Components/Logo";

const Home = () => {
  return (
    <div>
      <div className="items-center  max-w-[1000px] mx-auto justify-center">
        <div className="pt-5">
          <Logo />
        </div>
        <div>
          <div className="rounded-lg flex flex-col border w-[700px] mx-auto mb-10 items-center gap-6 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]">
            <p className="font-poppins font-normal text-lg">Hello there,</p>
            <p className="font-poppins font-normal text-lg">
              Welcome to Digi-Note
            </p>
            <h1 className="font-poppins font-normal text-base">
              Your access to your notes anytime
            </h1>
            <div className="flex pb-5 w-[400px] gap-8 justify-center items-center">
              <div className="w-[150]">
                <Link to="/login">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-nunito font-bold py-2 px-4 rounded">
                    Login
                  </button>
                </Link>
              </div>
              <div className="flex w-1/2 items-center">
                <h1 className="font-poppins font-normal text-xs">
                  Don't have an account?
                </h1>
                <Link to="/signup">
                  <button className="text-blue-500 hover:text-blue-400 font-nunito font-bold ">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
