import React from 'react'
import {Row, Col} from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement, CategoryScale, Title, Tooltip, Legend} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './dashboard.scss'


Chart.register(CategoryScale, ArcElement, Title, Tooltip, Legend, ChartDataLabels);
const PieCharts = () => {

    const reasons ={
        labels: ['System Error', 'Bank Error', 'Customer Error'],
        datasets:[
            {
                data:[ 500, 100, 70],
                borderColor:'transparent',
                backgroundColor:[
                    '#F63002',
                    '#FEE664',
                    '#F3CE00'
                ],
                hoverBackgroundColor: [
                '#F63002',
                '#FEE664',
                '#F3CE00'
                ]
            }
        ]
    }

    const success ={
        labels: ['Successful', 'Failed'],
        datasets:[
            {
                label: '# of Votes',
                data:[ 500, 200 ],
                borderColor:'transparent',
                backgroundColor:[
                    '#F63002',
                    '#F9F4F4',
                    
                ],
                hoverBackgroundColor: [
                '#F63002',
                '#DDD7D7'
                ]
               
            }
        ]
    };

    const payment ={
        labels: ['Cards', 'PayAttitude'],
        datasets:[
            {
                label: '# of Votes',
                data:[ 500, 200 ],
                borderColor:'transparent',
                backgroundColor:[
                    '#05B862',
                    '#FF4400',
                    
                ],
                hoverBackgroundColor: [
                '#05B862',
                '#FF4400'
                ]
               
            }
        ]
    };

  return (
    <div className="pie font-default mt-40">
        <Row>
            <Col lg={4}>
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
                                position: "right",
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
                                text: 'Success Rate',
                                font:{
                                    family: "Lato",
                                    size: 14,
                                    weight:'700'
                                },
                                align: 'start',
                                padding: {
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
            </Col>
            <Col lg={4}>
                <Doughnut 
                    data={reasons} 
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
                                position: "right",
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
                                text: 'Refusal Reasons',
                                font:{
                                    family: "Lato",
                                    size: 14,
                                    weight:'700'
                                },
                                align: 'start',
                                padding: {
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
            </Col>
            <Col lg={4}>
                <Doughnut 
                    data={payment} 
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
                                position: "right",
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
                                text: 'Payment Methods',
                                font:{
                                    family: "Lato",
                                    size: 14,
                                    weight:'700'
                                },
                                align: 'start',
                                padding: {
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
            </Col>
        </Row>
    </div>
  )
}

export default PieCharts