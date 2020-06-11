import React from 'react';
import {buildChart, langColors, backgroundColor, borderColor} from '../utils/index';
import PropTypes from 'prop-types';
import ChartCard from '../Components/ChartCard';

const Chart = ({langData, repoData}) =>{

    // const [pie, setpie] = React.useState({});
    // const [bar, setbar] = React.useState({});
    const [langChartData, setLangChartData] = React.useState(null)
    const [starChartData, setStarChartData] = React.useState(null);
    const [starPerLanguageData, setStarPerLanguageData] = React.useState(null);
    const canvasTopLanguage = React.useRef(null);
    const canvasStartChart = React.useRef(null);
    const canvasStarPerLanguage = React.useRef(null);
    
    //get top language chart
    const initLangChart = () =>{
        const ctx = canvasTopLanguage.current;
        const labels = langData.map(lang => lang.label)
        const data = langData.map(lang => lang.value)
        setLangChartData(data);

        if(data.length > 0){
            const backgroundColor = langData.map(
                ({ color }) => `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}B3`,
              );

            const borderColor = langData.map(lang => `${lang.color}`);
            const chartType = 'pie';
            const axes = false;
            const legend = true;
            const config = {ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend };
            
            buildChart(config);  
        }
    }

    //Most starred chart
    const initStarredChart = () =>{
        const ctx = canvasStartChart.current;
        const LIMIT = 5;
        const sortProperty = 'stargazers_count';
        const mostStarredRepos = repoData
        .filter(repo => !repo.fork)
        .sort((a,b) => b[sortProperty] - a[sortProperty])
        .slice(0, LIMIT);

        const labels = mostStarredRepos.map(repo => repo.name);
        const data = mostStarredRepos.map(repo => repo[sortProperty]);

        setStarChartData(data);

        if(data.length > 0){
            const chartType = 'bar';
            const axes = true;
            const legend = false;
            const config = {ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend};

            buildChart(config);
        }
    }

    //get start per language
    const initStartPerLanguage = () => {
        const ctx = canvasStarPerLanguage.current;
        const filteredRepos = repoData.filter(repo => !repo.fork && repo.stargazers_count > 0);
        const uniqueLanguage = new Set(filteredRepos.map(repo => repo.language));
        const labels = Array.from(uniqueLanguage.values()).filter(l => l);

        const data = labels.map(lang => {
            const repos = filteredRepos.filter(repos => repos.language === lang);
            const starsArray = repos.map(r => r.stargazers_count);
            const starSum = starsArray.reduce((a,b) => a + b, 0);
            console.log(repos);
            return starSum;
        });

        setStarPerLanguageData(data);

        if(data.length > 0){
            const chartType = 'doughnut';
            const axes = false;
            const legend = true;
            const borderColor = labels.map(label => langColors[label]);
            const backgroundColor = borderColor.map(color => `${color}B3`);
            const config = {ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend};
            
            buildChart(config);
        }
    }

    React.useEffect(() => {
        if(langData.length && repoData.length){
            initLangChart();
            initStarredChart();
            initStartPerLanguage();
        }
    }, []);

    const chartSize = 300;
    const langChartError = !(langChartData && langChartData.length > 0);
    const starredChartError = !(starChartData && starChartData.length > 0);
    const starPerLanguageError = !(starPerLanguageData && starPerLanguageData.length > 0);
    
    return(
        <>
            <div className="flex flex-col sm:flex-col lg:flex-row md:flex-col lg:flex-wrap items-center justify-center bg-color ">
                <ChartCard>
                    {langChartError ? <h1 className="text-3xl mx-1 mb-5 text-gray-500">Nothing to see here!</h1> :
                    <h1 className="text-3xl mx-1 mb-5 text-gray-500">Top Languages</h1>}
                    <div className="p-3 sm:p-4 lg:p-6">
                        <canvas ref={canvasTopLanguage} width={chartSize} height={chartSize}/>
                    </div>
                </ChartCard>
                <ChartCard>
                    {starredChartError ? <h1 className="text-3xl mx-1 mb-5 text-gray-500">Nothing to see here!</h1> :
                    <h1 className="text-3xl mx-1 mb-5 text-gray-500">Most Starred</h1>}
                    <div className="p-3 sm:p-4 lg:p-6">
                        <canvas ref={canvasStartChart} width={chartSize} height={chartSize}/>
                    </div>
                </ChartCard>
                <ChartCard>
                    {starPerLanguageError ? 
                    <h1 className="text-3xl mx-1 mb-5 text-gray-500">Nothing to see here!</h1> : 
                    <h1 className="text-3xl mx-1 mb-5 text-gray-500">Star per Language</h1>}
                    <div className="p-3 sm:p-4 lg:p-6">
                        <canvas ref={canvasStarPerLanguage} width={chartSize} height={chartSize}/>
                    </div>
                </ChartCard>
            </div>
        </>
    );
}

Chart.propTypes = {
    langData: PropTypes.array.isRequired,
    repoData: PropTypes.array.isRequired,
  };

export default Chart;


