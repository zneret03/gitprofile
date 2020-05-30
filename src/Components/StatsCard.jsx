import React from 'react';

const StatsCard = (props) => {
    return(
            <div className="py-3 w-32 mt-3 mr-1 sm:py-3 sm:w-40 sm:mr-3 shadow-lg bg-card rounded text-center">
                <span className="text-white">{props.number}</span>
                <footer className="text-center">
                <span className="text-gray-500 tracking-widest text-xs">{props.stats}</span>
                </footer>
            </div>
    );
}

export default StatsCard;