import React from 'react';
import Octicon, { Repo, Star, RepoForked} from '@primer/octicons-react';
import {langColors} from '../utils/index'
const Repositories = ({repoData}) => {

    const [topRepos, setTopRepos] = React.useState([]);

    React.useEffect(() => {
        if(repoData.length){
            const LIMIT = 15;

            const sorted = repoData
            .filter(repo => !repo.fork)
            .slice(0, LIMIT);
    
            setTopRepos(sorted);
        }   
    }, [repoData])

    const style = {
        color : '#3C3636'
    }

    return(
        <div className="bg-color pt-10">
            <div className="container mx-auto px-5 sm:px-12">
                <h1 className="text-3xl text-gray-500">Top Repositories</h1>
                {topRepos.length > 0 ? (
                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-3  grid-rows gap-5 py-5">
                    {topRepos.map(repo => (
                    <li key={repo.id}>
                        <div className="overflow-hidden shadow-xl hover:shadow-lg bg-white p-8">
                            <div className="rounded-sm ml-1">
                                    <a href={repo.html_url}>
                                        <div className="flex flex-grow">
                                        <Octicon className="my-2" icon={Repo}/>
                                        {repo.name.length > 19 
                                        ? (<h3 className="mx-3 text-2xl font-mono truncate" style={{color : style.color}}>{repo.name}</h3>) 
                                        : (<h3 className="mx-3 text-2xl font-mono" style={{color : style.color}}>{repo.name}</h3>) }
                                        </div>  
                                        {/* <div>
                                            <p className="block text-xs">{repo.description}</p>
                                        </div> */}
                                        <div className="text-sm text-gray-600">
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