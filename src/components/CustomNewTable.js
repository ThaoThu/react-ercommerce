import React, { Component } from 'react'
import ReactTable from 'react-table-v6'
import Pagination from "./CustomPagination";

export default class CustomNewTable extends Component {
    render() {
        return <ReactTable
         
        showPagination = {this.props.data?.length ? true : false}
        {...this.props}
        PaginationComponent={Pagination}
            className={`${this.props.className || ''} MyReactTableClass new-table`}
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
