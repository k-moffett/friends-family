import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class Paginator extends Component {
  
    render() {
        let totalPages = [...Array(this.props.totalPages)]
        return(
          <Pagination aria-label="family review pagnation">
            <PaginationItem>
                <PaginationLink previous onClick={(e) => {this.props.handlePageChange(this.state.currentPage-1)}} />
            </PaginationItem>
                {totalPages.map((item, index) => {
                    return(
                    <PaginationItem>
                        <PaginationLink onClick={(e) => {this.props.handlePageChange(index+1)}}>
                        {index+1}
                        </PaginationLink>
                    </PaginationItem>
                    )
                })}
            <PaginationItem>
                <PaginationLink next onClick={(e) => {this.props.handlePageChange(this.state.currentPage+1)}} />
            </PaginationItem>
          </Pagination>
        )
    }
 }
