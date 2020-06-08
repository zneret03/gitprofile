import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarAlt, faBriefcase, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

//components 
import GitInformation from '../Components/GitInformation';
import StatsCard from '../Components/StatsCard';
const Headers = props =>{

    //Convert Date
    function convertDate(){
        const date = new Date(Date.parse(props.users.created_at));
        return date.toDateString();
    }

    return(
        <div className="h-screen bg-userProfile-color">
            {/**wave svg*/}
            <div className="absolute bottom-0">
                 <img className="fill-current w-screen" src={require('../images/Vector.svg')} alt="icon"/>
            </div>
            {/**github icon*/}
            <div className="absolute right-0">
                <a href="https://github.com/zneret03/gitprofile">
                    <img className="absolute right-0 py-2 px-3" 
                    src={require('../images/github.svg')} alt="img"/>
                 </a>
                <img src={require('../images/triangleShape.svg')} alt="img"/>
            </div>
            {/**user avatar*/}
            <div className="flex justify-center">
                <div className="mt-10">

                    <img className="w-40 h-40 rounded-full object-cover" src={`https://avatars3.githubusercontent.com/u/${props.users.id}?v=4`} alt="user avatar"/>
                </div>
            </div>
            <div className="flex justify-center mt-3">
                <h1 className="text-white font-bold">{props.users.name}</h1>
            </div>
            <div className="flex justify-center mt-1">
                <h2><a href={props.users.html_url} className="text-white text-2xl a-color">@{props.users.login}</a></h2> 
            </div>
            {/**User Information */}
            <div className="flex content-start flex-wrap justify-center sm:justify-center py-1  mt-3">
                {/**Work */}
                {props.users.company ? (
                    <GitInformation className={'info mr-3'}>
                        <i><FontAwesomeIcon className="mr-3" icon={faBriefcase}/></i>
                        {props.users.company}
                    </GitInformation>
                ) : null}
                {/**Location */}
                {props.users.location ? 
                    (<GitInformation className={'info mr-3'}>
                        <i><FontAwesomeIcon className="mr-3" icon={faMapMarkerAlt}/></i>
                        {props.users.location}
                    </GitInformation> 
                    ) : null}
                {/**Date Joined */}
                <GitInformation className="info">
                    <i><FontAwesomeIcon className="mr-3" icon={faCalendarAlt}/></i>
                        Joined {convertDate()}
                </GitInformation>   
            </div>
            <div className="flex justify-center">
                <StatsCard number={props.users.public_repos} stats={'REPOSITORIES'}/>
                <StatsCard number={props.users.followers} stats={'FOLLOWERS'}/>
                <StatsCard number={props.users.following} stats={'FOLLOWING'}/>
            </div>
        </div>
    );
}

export default Headers;