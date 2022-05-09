import React from 'react'
import './dashboard.scss'
import { Row, Col } from 'react-bootstrap'
import { Bar, Doughnut } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables, ChartDataLabels);


const BarChart = () => {
    const data = {
        labels: [
          "Jan",
          "Feb",
          "March",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Total Revenue",
            data: [10000, 20000, 50000, 30000, 10000, 40000,20000, 40000, 10000, 30000, 10000, 20000],
            backgroundColor: "transparent",
            borderColor:"rgba(249, 132, 53, 0.44)",
            borderRadius: 10,
            hoverBackgroundColor: '#FF4400',
            borderWidth: 2,
          },
        ],
    };

    const success ={
        labels: ['Active Users', 'Inactive Users', 'Deactivated Users', 'Deleted Users'],
        datasets:[
            {
                label: '# of Votes',
                data:[ 500, 200, 100, 300 ],
                borderColor:'transparent',
                backgroundColor:[
                    '#05B862',
                    '#5F5F5F',
                    '#F63002',
                    '#FFFFFF'
                    
                ],
                hoverBackgroundColor: [
                '#05B862',
                '#5F5F5F',
                '#F63002',
                '#FFFFFF'
                ]
               
            }
        ]
    };
  return (
    <Row>
        <Col lg={8}>
            <div className="bar mt-40">
                <Bar 
                    data={data} 
                    options={{
                        plugins:{
                            legend:{
                                display: false,
                                position: "top",
                                align: "center",
                                labels:{
                                    font:{
                                        family: "Lato",
                                        size: 12
                                    },
                                    color: "#373D3F",
                                    backgroundColor: "rgba(0, 0, 0, 0)",
                                    boxWidth: 40,
                                    padding: 20,
                                    // usePointStyle: true

                                },
                                
                            },
                            datalabels: {
                                display: false,
                                // color:'#ffffff',
                                // font:{
                                //     family: "Poppins",
                                //     size: 10
                                // },
                            }
                        },
                        layout: {
                            padding: {
                                left: 20,
                                right: 20,
                                top: 120
                            }
                        },
                        scales: {
                        xAxis: {
                            ticks:{
                                display: true,
                                padding: 10,
                                font:{
                                    family: "Lato",
                                    size: 10,
                                    weight: 'bold'
                                },
                            },
                            grid: {
                            display: false,
                            drawBorder: false
                        }
                        },
                        yAxis: {
                            ticks:{
                                display: true,
                                padding: 10,
                                font:{
                                    family: "Lato",
                                    size: 10,
                                    weight: 'bold'
                                },
                            },
                            grid: {
                            display: true,
                            drawBorder: false,
                            color: 'rgba(249, 132, 53, 0.44)',
                            borderDash: [2, 5],
                        }
                        }
                        },
                        
                    }} 
                />
            </div>
        </Col>
        <Col lg={4} >
            <div className="bar-pie mt-40">
                <Doughnut 
                    data={success} 
                    width={370}
                    height={370}
                    options={{ 
                        responsive: false,
                        cutout: '80%',
                        tooltips:{
                            enabled: true,
                        },
                        layout: {
                            padding: {
                                left: 20,
                                right: 20,
                            }
                        },
                        plugins:{
                            legend:{
                                display: true,
                                position: "bottom",
                                align: "center",
                                labels:{
                                    font:{
                                        family: "Lato",
                                        size: 13
                                    },
                                    color: "#373D3F",
                                    boxWidth: 12,
                                    padding: 20,
                                    // usePointStyle: true

                                },
                                
                            },
                            title: {
                                display: true,
                                color:'#000',
                                text: 'Merchant Overview',
                                font:{
                                    family: "Lato",
                                    size: 14,
                                    weight:'700'
                                },
                                align: 'start',
                                padding: {
                                    top: 10,
                                    bottom: 0
                                },

                            },
                            datalabels: {
                                display: false,
                                color:'#ffffff',
                                font:{
                                    family: "Lato",
                                    size: 10
                                },
                            }
                        }
                        }} 
                />
            </div>
            
        </Col>

    </Row>

  )
}

export default BarChart