import React from 'react';
import Octicon, { Repo, Star, RepoForked} from '@primer/octicons-react';
const Repositories = () => {

    return(
        <div className="bg-color">
            <div className="flex justify-center">
                <div className="shadow-xl bg-white rounded-sm py-6">
                    <div className="">
                            <a href="">
                                <div className="flex py-2">
                                <Octicon className="ml-10 my-2" icon={Repo}/>
                                <h2 className="mx-3 text-2xl pr-5 font-mono ">5G_presentation</h2>
                                </div>
                                <div className="text-sm text-gray-600 ml-10">
                                    <div>
                                        {/**Repository language*/}
                                        <span className="language mr-3 mt-6" style={{backgroundColor : '#F1E05A'}}></span>
                                        <span className="font-sans">
                                            Javascript
                                        </span>
                                        {/**Repositories Star */}
                                        <Octicon className="ml-5 mr-1"  icon={Star}/>
                                        <span className="mr-2">
                                            0
                                        </span>
                                        {/**Repositories fork*/}
                                        <Octicon className="ml-1 mr-1" icon={RepoForked}/>
                                        <span className="mr-4">
                                            0
                                        </span>

                                        <span className="ml-10 px-12">89,445 KB</span>
                                    </div>
                                </div>
                            </a>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Repositories;