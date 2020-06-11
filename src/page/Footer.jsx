import React from 'react'; 

const Footer = () => {

    const link_style = {
        link : '#9DC6F8'
    }

    return(
        <div className="bg-color">
            <div className="flex justify-center pt-10 text-2lg pb-5">
                <span className="mr-2 text-gray-700">Built with</span>
                <a href="https://reactjs.org/" className="mr-1" style={{color : link_style.link}}>
                    Reactjs
                </a>
                <span style={{color : link_style.link}}>&middot;</span>
                <a href="https://www.chartjs.org/" className="mx-1" style={{color : link_style.link}}>
                    chartjs
                </a>
                <span style={{color : link_style.link}}>&middot;</span>
                <a href="https://tailwindcss.com/" className="mx-1" style={{color : link_style.link}}>
                    tailwindcss
                </a>
                <span style={{color : link_style.link}}>&middot;</span>
                <a href="https://github.com/primer/octicons" className="mx-1" style={{color : link_style.link}}>
                    Octicons
                </a>
                <span style={{color : link_style.link}}>&middot;</span>
                <a href="https://www.npmjs.com/package/gh-polyglot" className="ml-1" style={{color : link_style.link}}>
                    Gh-polyglot
                </a>
                <span className="ml-2 text-gray-700">and more!</span>
            </div>
        </div>
    );
}

export default Footer;