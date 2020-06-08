import React from 'react';
import Octicon, { Repo, Star, RepoForked} from '@primer/octicons-react';
import {langColors} from '../utils/index'
const Repositories = ({repoData}) => {

    const [topRepos, setTopRepos] = React.useState([]);

    const getTopRepos = type =>{
        const LIMIT = 8;

        const sorted = repoData
        .filter(repo => !repo.fork)
        .slice(0, LIMIT);

        setTopRepos(sorted);
    }

    React.useEffect(() => {
        if(repoData.length){
            getTopRepos();
        }   
    }, [])

    //!Playing with grid
    //!issue the size need to be align

    return(
        <div className="bg-color">
            <div className="container mx-auto">
                <h1 className="text-3xl text-gray-600">Top Repositories</h1>
                {topRepos.length > 0 ? (
                    <div className="grid lg:grid-cols-3 lg:gap-3 grid-rows gap-3 py-5">
                    {repoData.map(repo => (
                    <li key={repo.id}>
                        <div className="overflow-hidden shadow-xl hover:shadow-lg bg-white p-8">
                            <div className="rounded-sm ml-1 flex">
                                    <a href={repo.html_url}>
                                        <div className="flex flex-grow">
                                        <Octicon className="my-2" icon={Repo}/>
                                        {repo.name.length > 19 
                                        ? (<h3 className="mx-3 text-2xl font-mono truncate">{repo.name}</h3>) 
                                        : (<h3 className="mx-3 text-2xl font-mono">{repo.name}</h3>) }
                                        </div>  
                                        {/* <div>
                                            <p className="block text-xs">{repo.description}</p>
                                        </div> */}
                                        <div className="text-sm text-gray-600 flex flex-grow">
                                            <div>
                                                {/**Repository language*/}
                                                <span className="language mr-3 mt-6" style={{backgroundColor : langColors[repo.language]}}></span>
                                                <span className="font-sans w-48">
                                                    {repo.language && repo.language ? repo.language : 'no language'}
                                                </span>
                                                {/**Repositories Star */}
                                                <Octicon className="ml-5 mr-1"  icon={Star}/>
                                                <span className="mr-2">
                                                    {repo.stargazers_count.toLocaleString()}
                                                </span>
                                                {/**Repositories fork*/}
                                                <Octicon className="ml-1 mr-1" icon={RepoForked}/>
                                                <span>
                                                    {repo.forks.toLocaleString()}
                                                </span>
                                                <span 
                                                className="ml-5 inline-block bg-gray-200 rounded-full px-3 py-1 mr-2 ">
                                                    {repo.size.toLocaleString()} KB
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                            </div>
                        </div>
                        </li>           
                        ))}
                    </div>
                ) : (<p className="text-gray-600 flex justify-center items-center h-screen">No Repositories found!!!</p>)}

            </div>
            </div>
    );
}


export default Repositories;