import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";

function Card({ results, error }) {
  return (
    <div className="h-max flex items-start justify-start gap-10 p-5 bg-card-background w-full rounded-lg">
      {results ? (
        <>
          {/* Image section */}
          <div className="w-40 h-40 rounded-full overflow-hidden flex-none">
            <img
              src={
                results.avatar_url ||
                "https://github.blog/wp-content/uploads/2013/04/0cf7be70-a5e3-11e2-8943-6ac7a953f26d.jpg?resize=1234%2C631"
              }
              alt="Github logo"
              className="object-cover w-full h-full rounded-full bg-gray"
            />
          </div>
          {/* Main details section*/}
          <div className="flex flex-col w-full">
            {/* Header section */}
            <div className="flex items-start justify-between">
              <div className="text-[#fff]">
                <h1 className="text-2xl font-bold">
                  {results.login ? results.login : "TheOctocat"}
                </h1>
                <p className="text-[#0865C9]">
                  {results.login ? (
                    <a href={results.html_url} className="hover:underline">
                      @{results.login}
                    </a>
                  ) : (
                    "@octocat"
                  )}
                </p>
              </div>
              <div>
                <p className="text-gray">
                  Joined{" "}
                  {results.created_at
                    ? new Date(results.created_at).toLocaleDateString()
                    : " 1/1/1990 "}
                </p>
              </div>
            </div>
            {/* Details section */}
            <p className="text-gray pt-5">
              {results.bio || "This profile has no bio"}
            </p>
            {/* Repos section */}
            <div className="bg-profile flex items-center justify-around rounded-md w-full my-5 py-5">
              {/* Repos */}
              <div className="">
                <h2 className="text-md text-gray hover:underline">
                  <a href={results.repos_url}>Repos</a>
                </h2>
                <p className="text-[#fff] font-bold text-2xl">
                  {results.public_repos ? results.public_repos : "39"}
                </p>
              </div>
              {/* Followers */}
              <div className="">
                <h2 className="text-md text-gray hover:underline">
                  <a href={results.followers_url}>Followers</a>
                </h2>
                <p className="text-[#fff] font-bold text-2xl">
                  {results.followers ? results.followers : "38654"}
                </p>
              </div>
              {/* Following */}
              <div className="">
                <h2 className="text-md text-gray hover:underline">
                  <a href={results.following_url}>Following</a>
                </h2>
                <p className="text-[#fff] font-bold text-2xl">
                  {results.following ? results.following : "80"}
                </p>
              </div>
            </div>
            {/* Location section */}
            <div className="grid grid-cols-2 gap-3 text-gray">
              <div className="flex gap-2 items-center">
                <FaLocationDot />
                <p>
                  {results.location
                    ? results.location
                    : results.location === null
                    ? "Not Available"
                    : "Carlifonia"}
                </p>
              </div>
              {/* Twitter section */}
              <div className="flex gap-2 items-center">
                <FaTwitter />
                <p>
                  {results.twitter_username
                    ? results.twitter_username
                    : results.twitter_username === null && "Not Available"}
                </p>
              </div>
              {/* Blog website section */}
              <div className="flex gap-2 items-center">
                <FaLink />
                <p>
                  {results.blog
                    ? results.blog
                    : results.blog === null || " " || undefined
                    ? "Not Available"
                    : "https://github.blog"}
                </p>
              </div>
              {/* Company section */}
              <div className="flex gap-2 items-center">
                <FaRegBuilding />
                <p>
                  {results.company
                    ? `@${results.company}`
                    : results.company === null
                    ? "Not Available"
                    : "@github"}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>{error.message}</div>
      )}
    </div>
  );
}

export default Card;
