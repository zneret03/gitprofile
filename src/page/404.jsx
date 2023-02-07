import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"

const NoRouteMatch = () => {
  const github = (
    <FontAwesomeIcon
      className="block text-gray-500 hover:text-blue-800 mb-8 mx-auto"
      icon={faGithub}
      size="2x"
    />
  )
  return (
    <>
      <div className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-gray-800 text-lg font-mono font-bold tracking-wide">
            HOW DID YOU GET HERE?
          </h1>
          <p className="text-gray-500 text-xs mt-5 font-mono">
            This page was not found, You may have mistyped the address
          </p>
          <p className="text-gray-500 text-xs font-mono">
            Back to{" "}
            <Link className="hover:text-red-500 hover:underline " to="/">
              home
            </Link>
          </p>
          <img className="mt-10 mr-16" src="./images/404.png" alt="" />
        </div>
      </div>
      <a href="https://github.com/zneret03/gitprofile">{github}</a>
    </>
  )
}

export default NoRouteMatch
