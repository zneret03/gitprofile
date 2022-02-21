import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarAlt, faBriefcase, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

//components 
import GitInformation from '../Components/GitInformation';
import StatsCard from '../Components/StatsCard';
import Followers from './Followers';
import Following from './Following';

const Headers = ({users, followers, following}) =>{
    const [modalFollowers, setModalFollowers] = React.useState(false);
    const [modalFollowing, setModalFollowing] = React.useState(false);

    const modalFollowersOpen = e => {
        e.preventDefault();
        if(modalFollowers === false){
            setModalFollowers(true)
        }
    }

    const modalFollowersClose = e => {
        e.preventDefault();
        if(modalFollowers){
            setModalFollowers(false);
        }
    }

    const modalFollowingsOpen = e => {
        e.preventDefault();
        if(modalFollowing === false){
            setModalFollowing(true)
        }
    }

    const modalFollowingClose = e => {
        e.preventDefault();
        if(modalFollowing){
            setModalFollowing(false);
        }
    }

    return(
        <>
        <div className="h-screen bg-userProfile-color">
            {/**wave svg*/}
            <div className="absolute bottom-0">
                 <img className="fill-current w-screen" src={require('../images/vector.svg')} alt="icon"/>
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
                    <img className="w-40 h-40 rounded-full object-cover" src={`https://avatars3.githubusercontent.com/u/${users.id}?v=4`} alt="user avatar"/>
                </div>
            </div>
            <div className="flex justify-center mt-3">
                <h1 className="text-white font-bold">{users.name}</h1>
            </div>
            <div className="flex justify-center mt-1">
                <h2><a href={users.html_url} className="text-white text-2xl a-color">@{users.login}</a></h2> 
            </div>
            {/**User Information */}
            <div className="flex content-start flex-wrap justify-center sm:justify-center py-1  mt-3">
                {/**Work */}
                {users.company ? (
                    <GitInformation className={'info mr-3'}>
                        <i><FontAwesomeIcon className="mr-3" icon={faBriefcase}/></i>
                        {users.company}
                    </GitInformation>
                ) : null}
                {/**Location */}
                {users.location ? 
                    (<GitInformation className={'info mx-6'}>
                        <i><FontAwesomeIcon className="mr-3" icon={faMapMarkerAlt}/></i>
                        {users.location}
                    </GitInformation> 
                    ) : null}
                {/**Date Joined */}
                <GitInformation className="info">
                    <i><FontAwesomeIcon className="mr-3" icon={faCalendarAlt}/></i>
                        Joined {new Date(users.created_at).toLocaleDateString('en-US', {
                            month : 'long',
                            day : 'numeric',
                            year : 'numeric'
                        })}
                </GitInformation>   
            </div>
            <div className="flex justify-center">
                <StatsCard number={users.public_repos} stats={'REPOSITORIES'}/>
                <StatsCard modal={(e) => modalFollowersOpen(e)} number={users.followers} stats={'FOLLOWERS'}/>
                <StatsCard modal={(e) => modalFollowingsOpen(e)} number={users.following} stats={'FOLLOWING'}/>
            </div>
        </div>
        {modalFollowers === true && <Followers followers={followers} modal={(e) => modalFollowersClose(e)}/>}   
        {modalFollowing === true && <Following following={following} modal={(e) => modalFollowingClose(e)}/>}   
        </>
    );
}


export default Headers;