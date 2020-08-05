import React, { Component } from "react";
import Chart from "chart.js";
export default class CustomLineChart extends Component {
  componentDidMount() {
    console.log('this.props.data',this.props.data)
    var ctx = document.getElementById(this.props.id);
    ctx.height = this.props?.height || 250;
    var myChart = new Chart(ctx, {
      type: "line",
      data: this.props.data,
      options: {
        labels : {
          // fontSize: 14,
        },
        legend: {
            display: this.props.legend || false
        },
        scales: {
          yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true,
                // steps: 10,
                // stepSize: 1,
                // stepValue: 1,
              }
          }]
      },
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height  },
        plugins: {
          datalabels: {
            display: false,
          }
        },
      },
    });
  }
  render() {
    return (
      <React.Fragment>
        <div id={this.props.id + "-wrapper"} className="chart-wrapper-canvas">
          
            <canvas id={this.props.id}></canvas>
          
          
        </div>
      </React.Fragment>
    );
  }
}
