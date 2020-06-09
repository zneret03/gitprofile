import React from 'react';
import Headers from './Headers';
import Error from './Error';
import Chart from './Chart';
import PropTypes from 'prop-types';
import Repositories from '../page/Repositories'
import GhPolyglot from 'gh-polyglot';

const GitProfile = (props) => {   
    const [gitUser, setGitUser] = React.useState([]);
    const [gitRepositories, setRepositories] = React.useState([]);
    const [languageData, setLanguageData] = React.useState(null);
    const [error, setError] = React.useState({active : false, type : 200});

    //* Reminders
    //TODO: working on charts

    //get user data
    const getUserData = async () => {
            const params = new URLSearchParams(props.location.search);
            const API = 'https://api.github.com/users/';
            const DEFAULT_QUERY = params.get('id');

            let result = [];

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
                result.push(data);
            }).catch((error) => {
                setError({active: true, type:400});
                console.error('Error : ', error.message)
            });

            //console.log(result);
            setGitUser(result);
    }

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

    const getRepositories = async() => {
        const params = new URLSearchParams(props.location.search);
        const DEFAULT_QUERY = params.get('id');
        const API = `https://api.github.com/users/` + DEFAULT_QUERY + `/repos?per_page=100`;

        let repositories_array = [];

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
            repositories_array.push(data);
        }).catch((error) => {
            setError({active: true, type:400});
            console.error('Error : ', error.message)
        });

        setRepositories(repositories_array);
    }
 
    React.useEffect(() => {
        getLangData();
        getUserData();
        getRepositories();
    },[]);

    return(
        <div>
            {error && error.active ? (
                <Error error={error}/>
            ) : 
            <div className="h-screen">
                {gitUser.map((items, index) => (
                    <Headers 
                    users={items} 
                    key={items.message ? index : items.id} 
                    error={error}/>
                ))}

                {languageData && <Chart langData={languageData}/>}
               

                {gitRepositories.map((repo, index) => (
                    <Repositories 
                    repoData={repo} 
                    key={index}
                    />
                ))}

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
