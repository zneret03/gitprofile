import React from "react"
import FollowersCard from "../Components/FollowersCard"
const Followers = ({ modal, followers }) => {
  return (
    <>
      <FollowersCard>
        {/**Modal content */}
        <div className="text-center pt-4 px-6">
          {/**Modal header */}
          <div className="pb-1">
            <div className="cursor-pointer float-right">
              <img src="./images/window_close.svg" onClick={modal} alt="" />
            </div>
            <p className="text-2xl font-bold tracking-wide">Followers</p>
          </div>
        </div>
        {/**Modal body */}
        {followers.length > 0 ? (
          <>
            {followers.map((follow) => (
              <div className="container mx-auto px-2">
                <div className="flex items-center my-5">
                  <a href={follow.html_url}>
                    <img
                      className="rounded-full object-cover w-10 h-10 mx-4 border-2 border-blue-400"
                      src={`https://avatars3.githubusercontent.com/u/${follow.id}?v=4`}
                      alt=""
                    />
                  </a>
                  <div className="text-sm flex-1 overflow-hidden">
                    <p className="font-bold leading-none sm:break-normal">
                      {follow.login}
                    </p>
                    <p className="text-gray-600">{follow.id}</p>
                  </div>
                  <div className="self-end mr-5 text-sm">
                    <button className="border py-2 px-4 rounded-sm font-bold">
                      Following
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text-1xl text-gray-500 p-5">There is no Followers</p>
        )}
      </FollowersCard>
    </>
  )
}

export default Followers
