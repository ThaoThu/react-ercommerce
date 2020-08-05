import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
const options = {
  //  maintainAspectRatio: false ,
  aspectRatio: 1, 
  legend: {
    display: true,
    position: "right",
    labels: {
      fontColor: "#666666",
      fontSize: 14,
      // boxWidth : 10,
      // radi
    },
    
  },

  elements: {
    arc: {
      borderWidth: 0,
    },
  },
  plugins: {
    datalabels: {
      display: true,
      color: "white",
      formatter: function(value, context) {
        return value && value != 0 ? value + "%" : null;
      },
      font: {
        weight: "bold",
        size: 14,
      },
    },
  },
};
export default class CustomPieChart extends Component {
  render() {
    return <Pie {...this.props} options={options} />;
  }
}
