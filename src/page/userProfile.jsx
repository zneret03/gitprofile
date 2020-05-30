import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import StatsCard from '../Components/StatsCard';
//import Main from '../Components/Main';
const UserProfile = props =>{

    // if(props.users.message){
    //     return <Main key={props.users.id}><div>
    //                    <label className="block text-4xl text-center font-bold text-white mb-5">
    //                        Git Profile
    //                    </label>
    //                    <h1 className="text-white">Data not found! try again later</h1>
    //                </div>
    //            </Main>
    // }

    return(
        <div className="h-screen bg-userProfile-color">
            <div className="absolute bottom-0">
                <img src={require('../images/Vector.svg')} alt=""/>
            </div>
            <div className="absolute right-0">
                <img className="absolute right-0 py-2 px-3" src={require('../images/github.svg')} alt="img"/>
                <img src={require('../images/icon.svg')} alt=""/>
            </div>

            <div className="flex justify-center">
                <div className="mt-10">
                    <img className="w-40 h-40 rounded-full object-cover" src={require('../images/avatar.jpg')} alt="img"/>
                </div>
            </div>
            <div className="flex justify-center mt-3">
                <h1 className="text-white font-bold">Ian A. Drilon</h1>
            </div>
            <div className="flex justify-center mt-1">
               <h2><a href="facebook.com" className="text-white text-2xl a-color">@zneret03</a></h2> 
            </div>
            <div className="flex justify-center mt-3">
                <span className="info">
                    <i><FontAwesomeIcon className="mr-3" icon={faCalendarAlt}/></i>
                    Joined June 2, 2017
                </span>
            </div>

            <div className="flex justify-center">
                <StatsCard number={50} stats={'REPOSITORIES'}/>
                <StatsCard number={258} stats={'FOLLOWERS'}/>
                <StatsCard number={80} stats={'FOLLOWING'}/>
            </div>

            {/* <h1>{props.users.login}</h1> */}
        </div>
    );
}

export default UserProfile;