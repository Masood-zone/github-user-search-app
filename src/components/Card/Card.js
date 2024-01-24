import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";

function Card() {
  return (
    <div className="h-max flex items-start justify-start gap-10 p-5 bg-card-background w-full rounded-lg">
      {/* Image section */}
      <div className="w-40 h-32 rounded-full overflow-hidden">
        <img
          src="https://github.blog/wp-content/uploads/2013/04/0cf7be70-a5e3-11e2-8943-6ac7a953f26d.jpg?resize=1234%2C631"
          alt="Github logo"
          className="object-cover w-full h-full  rounded-full"
        />
      </div>
      {/* Main details */}
      <div className="flex flex-col w-full">
        {/* Header section */}
        <div className="flex items-start justify-between">
          <div className="text-[#fff]">
            <h1 className="text-2xl font-bold">The Octocat</h1>
            <p className="text-[#0865C9]">@octocat</p>
          </div>
          <div>
            <p className="text-gray">Joined 25 Jan 2011</p>
          </div>
        </div>
        {/* Details section */}
        <p className="text-gray pt-5">This profile has no bio</p>
        {/* Repos section */}
        <div className="bg-profile flex items-center justify-around rounded-md w-full my-5 py-5">
          {/* Change them into an array and map through them */}
          {/* Repos */}
          <div className="">
            <h2 className="text-md text-gray">Repos</h2>
            <p className="text-[#fff] font-bold text-2xl">8</p>
          </div>
          {/* Followers */}
          <div className="">
            <h2 className="text-md text-gray">Followers</h2>
            <p className="text-[#fff] font-bold text-2xl">3938</p>
          </div>
          {/* Following */}
          <div className="">
            <h2 className="text-md text-gray">Following</h2>
            <p className="text-[#fff] font-bold text-2xl">9</p>
          </div>
        </div>
        {/* Location section */}
        <div className="grid grid-cols-2 gap-3 text-gray">
          <div className="flex gap-2 items-center">
            <FaLocationDot />
            <p>San Francisco</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaTwitter />
            <p>Not Available</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaLink />
            <p>https://github.blog</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaRegBuilding />
            <p>@github</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
