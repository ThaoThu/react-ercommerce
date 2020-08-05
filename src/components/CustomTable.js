import React, { Component } from 'react'
import ReactTable from 'react-table-v6'
export default class CustomTable extends Component {
    render() {
        return <ReactTable 
            {...this.props}
            className={`${this.props.className} -striped -highlight MyReactTableClass`}
            previousText={'Trước'}
            nextText={'Sau'}
            pageText = {'Trang'}
            ofText = {'/'}
            rowsText = {'bản ghi'}
            noDataText = {this.props.noText || 'Không tìm thấy dữ liệu'}
            pageSizeOptions = {[6, 20, 50]}
            manual
            />
        
    }
}
