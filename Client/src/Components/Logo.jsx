import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div className="p-5 gap-4">
        <Link to={"/"}>
          <h1 className=" font-poppins font-bold text-[2rem] transition duration-75 ease-out text-[#10a6e9]">
            Digi-Note
          </h1>
          <h2 className="font-poppins font-medium italic text-[#10a6e9] text-[0.575rem]">
            .makes life easier
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
