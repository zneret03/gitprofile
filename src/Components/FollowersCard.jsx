import React from 'react';

const FollowersCard = ({children}) => {
    return(
        <div className="fixed top-0 left-0 w-full h-full flex items-start justify-center bg-gray-900 bg-opacity-50 overflow-auto">
            <div className="bg-white w-11/12 my-5 md:max-w-md mx-auto rounded-lg shadow-lg z-59">
                {children}
            </div>
        </div>
    );
}   

export default FollowersCard;