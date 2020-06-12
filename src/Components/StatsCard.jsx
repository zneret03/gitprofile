import React from 'react';
const StatsCard = ({number, stats, modal}) => {

    return(
        <>
        <div onClick={modal} className="cursor-pointer py-3 w-32 mt-5 mr-1 sm:py-3 sm:w-40 sm:mr-3 shadow-lg bg-card rounded text-center">
            <span className="text-white">{number}</span>
            <footer className="text-center">
            <span className="text-gray-500 tracking-widest text-xs">{stats}</span>
            </footer>
        </div>
        </>
    );
}

export default StatsCard;