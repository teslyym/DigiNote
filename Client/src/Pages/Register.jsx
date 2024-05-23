import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Components/Logo";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="items-center  max-w-[1000px] mx-auto justify-center">
        <div className="pt-5">
          <Logo />
          <div className="rounded-lg flex flex-col border w-[450px] mx-auto mb-10 items-center gap-6 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]">
            <div className="bg-white w-[400px] pl-4 outline-none focus:border-black ">
              <h1 className="text-left py-3 text-[#001712] text-sm font-medium">
                First Name
              </h1>
              <input
                type="text"
                placeholder="Enter First Name"
                required
                className="flex border border-[#9DA39F] rounded-md  px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-[400px] pl-4 outline-none focus:border-black ">
              <h1 className="text-left py-3 text-[#001712] text-sm font-medium">
                Last Name
              </h1>
              <input
                type="text"
                placeholder="Enter First Name"
                required
                className="flex border border-[#9DA39F] rounded-md  px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-[400px] pl-4 outline-none focus:border-black ">
              <h1 className="text-left py-3 text-[#001712] text-sm font-medium">
                Email
              </h1>
              <input
                type="text"
                placeholder="Enter First Name"
                required
                className="flex border border-[#9DA39F] rounded-md  px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-[400px] pl-4 outline-none">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Password (minimum of 8 characters)
              </h1>
              <div className="flex border border-[#9DA39F] rounded-md px-2 py-3 bg-white w-[400px] pl-4 outline-none focus:border-black items-center justify-between focus-within:border-black">
                <input
                  className="w-full outline-none"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  //   value={formData.password}
                  //   onChange={(e) =>
                  //     setFormData({ ...formData, password: e.target.value })
                  //   }
                  required
                />
                <svg
                  onClick={toggleShowPassword}
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 17.5C11.4696 17.5 10.9609 17.2893 10.5858 16.9142C10.2107 16.5391 10 16.0304 10 15.5C10 14.39 10.89 13.5 12 13.5C12.5304 13.5 13.0391 13.7107 13.4142 14.0858C13.7893 14.4609 14 14.9696 14 15.5C14 16.0304 13.7893 16.5391 13.4142 16.9142C13.0391 17.2893 12.5304 17.5 12 17.5ZM18 20.5V10.5H6V20.5H18ZM18 8.5C18.5304 8.5 19.0391 8.71071 19.4142 9.08579C19.7893 9.46086 20 9.96957 20 10.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V10.5C4 9.39 4.89 8.5 6 8.5H7V6.5C7 5.17392 7.52678 3.90215 8.46447 2.96447C9.40215 2.02678 10.6739 1.5 12 1.5C12.6566 1.5 13.3068 1.62933 13.9134 1.8806C14.52 2.13188 15.0712 2.50017 15.5355 2.96447C15.9998 3.42876 16.3681 3.97995 16.6194 4.58658C16.8707 5.19321 17 5.84339 17 6.5V8.5H18ZM12 3.5C11.2044 3.5 10.4413 3.81607 9.87868 4.37868C9.31607 4.94129 9 5.70435 9 6.5V8.5H15V6.5C15 5.70435 14.6839 4.94129 14.1213 4.37868C13.5587 3.81607 12.7956 3.5 12 3.5Z"
                    fill="#9DA39F"
                  />
                </svg>
              </div>
              <p className="pt-2 text-[0.875rem]">
                (Use alphabets, numbers and characters)
              </p>
            </div>
            <div className="w-[150] pb-3">
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-nunito font-bold py-2 px-4 rounded">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
