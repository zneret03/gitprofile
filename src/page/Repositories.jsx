import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';
const Repositories = () => {
    return(
        <div className="bg-color">
            <div className="flex justify-center mt-5">
                <div className="shadow bg-white rounded w-64">
                    <div className="py-5 font-mono">
                            <a href="">
                                <div className="flex">
                                <i><FontAwesomeIcon className="ml-6" icon={faBook}/></i>
                                <h2 className="mx-3">5G_presentation</h2>
                                </div>
                                <div className="flex">
                                    <span>
                                        <div className="language mx-6 mt-6"/>
                                        <p>javascript</p>
                                    </span>
                                </div>
                            </a>
                    </div>
                </div>
                <div className="shadow bg-white rounded w-64 mx-3">
                    <div className="py-5">
                    </div>
                </div>
                <div className="shadow bg-white rounded w-64">
                    <div className="py-5">
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Repositories;