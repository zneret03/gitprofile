import React from 'react';
import Main from '../Components/Main'
const Error = (props) => {
    return(
        <Main>
            <label className="block text-4xl text-center font-bold text-white mb-5">
                    Git Profile
                </label>
            {props.error.type === 403 ? (
                <>
                <h1 className="text-white text-lg">Error 403 </h1>
                <a
                    href="https://developer.github.com/v3/rate_limit/"
                    target="_blank"
                    rel="noopener noreferrer">
                    rate limit
                </a>
                ! Try again later
                </>
            ): props.error.type === 404 ? (
                <p className="text-center text-white">User not found!</p>
            ) : (
                <p className="text-white">Oh no! Something went wrong. Try again later!</p>
            )}  
        </Main>
    );
}

export default Error;