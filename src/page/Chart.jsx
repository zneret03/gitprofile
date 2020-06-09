import React from 'react';
import {langColor, buildChart, backgroundColor, borderColor} from '../utils/index';
const Chart = ({langData}) =>{

    // const [pie, setpie] = React.useState({});
    // const [bar, setbar] = React.useState({});
    const [langChartData, setLangChartData] = React.useState(null)
    const canvasTopLanguage = React.useRef(null);
    

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

    React.useEffect(() => {
        if(langData.length)
        initLangChart();
        // barChart();
    }, []);

    const chartSize = 300;
    const langChartError = !(langChartData && langChartData.length > 0);

    return(
        <div className="flex flex-col sm:flex-row items-center justify-center bg-color">
            <div className="shadow rounded p-5 mt-3 mx-2 bg-white">
                <h1 className="text-3xl mx-3 mb-5 text-gray-500">Top Languages</h1>
                {langChartError && <p>Nothing to see here!</p>}
                <canvas ref={canvasTopLanguage} width={chartSize} height={chartSize}/>
            </div>
        </div>
    )
}

export default Chart;


