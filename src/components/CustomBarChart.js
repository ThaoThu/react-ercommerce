import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

const options = {
    scales: {
         xAxes: [{
             stacked: true
         }],
         yAxes: [{
             stacked: true
         }]
     }
 }

export default class CustomBarChart extends Component {
    render() {
        return (
            <Bar  {...this.props} options={options} />
        )
    }
}
