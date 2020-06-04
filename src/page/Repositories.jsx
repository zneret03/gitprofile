import React from 'react';
import Octicon, { Repo, Star, RepoForked} from '@primer/octicons-react';
import PropTypes from 'prop-types';
import {langColors} from '../utils/index'
const Repositories = ({repoData}) => {

    return(
        <div className="bg-color">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl text-gray-600">Top Repositories</h1>
                <div className="grid lg:grid-cols-3 lg:gap-4 grid-rows gap-3 py-4">
                {repoData.map(repo => (
                <li key={repo.id}>
                    <div className="shadow-xl bg-white py-6">
                        <div className="rounded-sm">
                                <a href={repo.html_url}>
                                    <div className="flex py-2">
                                    <Octicon className="ml-10 my-2" icon={Repo}/>
                                        <h2 className="mx-3 text-2xl font-mono">{repo.name}</h2>
                                    </div>
                                    <div className="text-sm text-gray-600 ml-10 flex">
                                        <div className="w-3/4">
                                            {/**Repository language*/}
                                            <span className="language mr-3 mt-6" style={{backgroundColor : langColors[repo.language]}}></span>
                                            <span className="font-sans w-48">
                                                {repo.language}
                                            </span>
                                            {/**Repositories Star */}
                                            <Octicon className="ml-5 mr-1"  icon={Star}/>
                                            <span className="mr-2">
                                                {repo.stargazers_count.toLocaleString()}
                                            </span>
                                            {/**Repositories fork*/}
                                            <Octicon className="ml-1 mr-1" icon={RepoForked}/>
                                            <span className="mr-4">
                                                {repo.forks.toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="w-1/4 flex items-end justify-end">
                                            <span className="sm:px-10">{repo.size.toLocaleString()}KB</span>
                                        </div>
                                    </div>
                                </a>
                        </div>
                    </div>
                    </li>
                    ))}
                </div>
            </div>
            </div>
    );
}

Repositories.propTypes = {
    repoData : PropTypes.array.isRequired
}
export default Repositories;