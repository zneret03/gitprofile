import React from 'react';
import {Pie, Bar} from 'react-chartjs-2'
// import {langColor, mockLangData} from '../utils';
const Chart = ({languageData}) =>{

    const [pie, setpie] = React.useState({});
    const [bar, setbar] = React.useState({});
    //const [doughnut, setdoughnut] = React.useState({});
    
    const pieChart = () => {
        setpie({
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }] 
        })
    }


    const barChart = () =>{
        setbar({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [1.0, 0.9 ,0.8 ,0.7 , 0.6, 0.5, 0.4, 0.3, 0.2, 0.1]
              }
            ]
        });
    }

    React.useEffect(() => {
        pieChart();
        barChart();
        console.log(languageData)
    }, []);

    //     const data = {
    // 	labels: [
    // 		'Red',
    // 		'Blue',
    // 		'Yellow'
    // 	],
    // 	datasets: [{
    // 		data: [300, 50, 100],
    // 		backgroundColor: [
    // 		'#FF6384',
    // 		'#36A2EB',
    // 		'#FFCE56'
    // 		],
    // 		hoverBackgroundColor: [
    // 		'#FF6384',
    // 		'#36A2EB',
    // 		'#FFCE56'
    // 		]
    // 	}]
    // };



      
    //   const legendMarkup = (chart) =>{
    //     const legendSet = chart.data.datasets[0]
    //     const legend = chart.data.map((set, i) => {
    //         let dataPoint = chart.data.labels[i];
    //         if(dataPoint){
                
    //         }
    //     }) 
    //   }

    return(
        <div className="flex flex-col sm:flex-row items-center justify-center bg-color">
            <div className="shadow rounded px-5 mt-3 mx-2 bg-white">
                <h1 className="text-3xl mx-3 my-3 text-gray-500">Top Languages</h1>
                <Pie 
                    height={350}
                    data={pie}
                    options={{
                        title :{
                            display: false
                        },
                        legend : {
                            display: true,
                            position: 'right',
                            align: 'start',
                            labels : {
                                padding : 3
                            }
                        }
                        //egendCallback : legendMarkup
                    }}
                />
            </div>
            <div className="shadow rounded py-20 px-12 mt-3 mx-2 bg-white">
                <h1 className="text-3xl mx-3 my-3 text-gray-500">Most Starred</h1>
                <Bar 
                data={bar}
                width={450}
                height={100}
                options={{
                    maintainAspectRatio : false,
                    legend : {
                        labels : {
                            display : false
                        }
                    }
                }}
                />
            </div>
            {/* <div className="shadow rounded px-32 mt-3 mx-2 bg-white">
                3
            </div> */}
        </div>
    )
}

export default Chart;

