import React from 'react';
import Headers from './Headers';
import Error from './Error';
import Chart from './Chart';
import PropTypes from 'prop-types';
import Repositories from '../page/Repositories'
import GhPolyglot from 'gh-polyglot';
import Footer from './Footer';

const GitProfile = (props) => {   
    const [gitUser, setGitUser] = React.useState(null);
    const [gitRepositories, setRepositories] = React.useState(null);
    const [languageData, setLanguageData] = React.useState(null);
    const [followers, setfollowers] = React.useState(null);
    const [following, setFollowing] = React.useState(null);
    const [error, setError] = React.useState({active : false, type : 200});

    //get language statistics
    const getLangData = () =>{
        const params = new URLSearchParams(props.location.search);
        const DEFAULT_QUERY = params.get('id');
        const me = new GhPolyglot(DEFAULT_QUERY);
        
        me.userStats((err, stats)=>{
            if(err){
                console.log({Error : err.message});
                setError({active :true, type: 400});
            }
            setLanguageData(stats);
        });
    }        
    
    //get Followers
    const getFollowers = async () => {
        const params = new URLSearchParams(props.location.search);
        const API = 'https://api.github.com/users/';
        const FOLLOWERS = '/followers';
        const DEFAULT_QUERY = params.get('id');

        await fetch(API + DEFAULT_QUERY + FOLLOWERS)
        .then(response => {
            if(response.status === 404){
                setError({active : true, type : 404})
            }

            if(response.status === 403){
                setError({active: true, type: 403})
            }

            return response.json();
        }).then((data) => {
            setfollowers(data);
        }).catch((error) => {
            setError({active: true, type:400});
            console.error('Error : ', error.message)
        });
    } 

     //get Following
     const getFollowing = async () => {
        const params = new URLSearchParams(props.location.search);
        const API = 'https://api.github.com/users/';
        const FOLLOWERS = '/following';
        const DEFAULT_QUERY = params.get('id');

        await fetch(API + DEFAULT_QUERY + FOLLOWERS)
        .then(response => {
            if(response.status === 404){
                setError({active : true, type : 404})
            }

            if(response.status === 403){
                setError({active: true, type: 403})
            }

            return response.json();
        }).then((data) => {
            setFollowing(data);
        }).catch((error) => {
            setError({active: true, type:400});
            console.error('Error : ', error.message)
        });
    } 

    //get user data
    const getUserData = async () => {
            const params = new URLSearchParams(props.location.search);
            const API = 'https://api.github.com/users/';
            const DEFAULT_QUERY = params.get('id');


            await fetch(API + DEFAULT_QUERY)
            .then((response) => { 
                if(response.status === 404){
                    setError({active : true, type : 404})
                }

                if(response.status === 403){
                    setError({active: true, type: 403})
                }
                return response.json();
            })
            .then((data) => {
                setGitUser(data);
            }).catch((error) => {
                setError({active: true, type:400});
                console.error('Error : ', error.message)
            });
    }

    const getRepositories = async() => {
        const params = new URLSearchParams(props.location.search);
        const DEFAULT_QUERY = params.get('id');
        const API = `https://api.github.com/users/` + DEFAULT_QUERY + `/repos?per_page=100`;

        await fetch(API)
        .then((response) => { 
            if(response.status === 404){
                setError({active : true, type : 404})
            }

            if(response.status === 403){
                setError({active: true, type: 403})
            }
            return response.json();
        })
        .then((data) => {
            setRepositories(data);
        }).catch((error) => {
            setError({active: true, type:400});
            console.error('Error : ', error.message)
        });
    }
 
    React.useEffect(() => {
        getLangData();
        getUserData();
        getRepositories();
        getFollowers();
        getFollowing();
    },[]);


    return(
        <div>
            {error && error.active ? (
                <Error error={error}/>
            ) : 
            <div className="h-screen">

                {gitUser && followers && <Headers 
                users={gitUser} 
                error={error} 
                followers={followers}
                following={following}/>}

                {languageData && gitRepositories && <Chart 
                    langData={languageData} 
                    repoData={gitRepositories} 
                />}
               
                {gitRepositories && <Repositories repoData={gitRepositories} />}

                {languageData && gitRepositories && <Footer/>}
            </div>
            }
        </div>
    );
}

GitProfile.propTypes = {
    gitRepositories : PropTypes.array.isRequired,
    gitUser : PropTypes.array.isRequired,
    languageData : PropTypes.array.isRequired
}

export default GitProfile;
