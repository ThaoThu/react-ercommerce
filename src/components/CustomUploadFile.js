import React, { Component } from 'react'

export default class CustomUploadFile extends Component {
    render() {
        return (
            <div  className="uploadFile-box">
            <label>{this.props.label}</label>
             <input
                                  
                                    type="file"
                                  
                                   {...this.props}
                                />
    
            </div>
        )
    }
}
