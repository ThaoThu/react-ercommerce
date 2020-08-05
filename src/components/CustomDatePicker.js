import React, { Component } from 'react'
import {  DatePickerInput } from "rc-datepicker";
export default class CustomDatePicker extends Component {

    render() {
        return (
            <DatePickerInput
            {...this.props}
            locale="en"
            className="my-centom-datepicker-component"
            displayFormat = 'DD/MM/YYYY'
            placeholder = {this.props.placeholder ? this.props.placeholder  : null}
          />
        )
    }
}
