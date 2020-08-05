import React, { Component } from 'react'
import Select from "react-select";
export default class CustomReactSelect extends Component {
    render() {
        return (
            <Select {...this.props} noOptionsMessage={() => 'Không có dữ liệu'}  />
        )
    }
}
