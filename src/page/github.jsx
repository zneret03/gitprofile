import React from 'react';
import Headers from './Headers';
import Error from './Error';

const GitProfile = (props) => {   
    const [gitUser, setGitUser] = React.useState([]);
    const [gitRepositories, setRepositories] = React.useState([]);
    const [error, setError] = React.useState({active : false, type : 200});
    // const [rateLimit, setRateLimit] = React.useState(null);
    // const [langData, setLangData] = React.useState(null);
    //const [loading, setLoading] = React.useState(true);

    //!Pie chart 
   //!Fetching top languages from github api

    //get user data
    const getUserData = async () => {
            const params = new URLSearchParams(props.query);
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

            setGitUser(result);
    }

    const getRepositories = async() => {
        const params = new URLSearchParams(props.query);
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
        console.log(repositories_array);
    }
 
    React.useEffect(() => {
        getUserData();
        getRepositories();
    });

    return(
        <div>
            {error && error.active ? (
                <Error error={error}/>
            ) : 
            <div className="h-screen">
                {gitUser.map(items => (
                    <Headers 
                    users={items} 
                    key={items.message ? Math.floor(Math.random() * 100) : items.id} 
                    error={error}/>
                ))}
            </div>
            }
        </div>
    );
}

export default GitProfile;
