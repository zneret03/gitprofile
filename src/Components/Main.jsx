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
                    <div className="absolute top-0 right-0">
                        <a href="https://github.com/zneret03/gitprofile">
                            <img className="absolute right-0 py-2 px-3 z-50" 
                            src={require('../images/github.svg')} alt="img"/>
                        </a>
                        <img src={require('../images/triangleShape.svg')} alt="img"/>
                    </div>
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