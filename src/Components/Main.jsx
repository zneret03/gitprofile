import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
const Main = (props) => {
    //const context = React.useContext(MainContext);

    //icons
    const github = <FontAwesomeIcon className="block text-blue-500 mb-8 mx-auto" icon={faGithub} size="4x"/>
    return(
        <div>
            <div className="bg-black h-screen flex items-center justify-center">
                <div className="mb-5">
                    <div>
                        {github}
                    </div>
                   {props.children}
                </div>
            </div>
        </div>
    );
}

export default Main;