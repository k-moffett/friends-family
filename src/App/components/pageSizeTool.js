import React, { Component } from 'react';
import {ButtonGroup, Button} from 'reactstrap';

export default class PageSizeTool extends Component {

    render() {
        return(
        <ButtonGroup>
            <Button onClick={(e) => {this.props.updateItemsPerPage(2)}}>2</Button>
            <Button onClick={(e) => {this.props.updateItemsPerPage(3)}}>3</Button>
            <Button onClick={(e) => {this.props.updateItemsPerPage(4)}}>4</Button>
            <Button onClick={(e) => {this.props.updateItemsPerPage(5)}}>5</Button>
            <Button onClick={(e) => {this.props.updateItemsPerPage(6)}}>6</Button>
            <Button onClick={(e) => {this.props.updateItemsPerPage(this.props.itemsLength)}}>Show All</Button>
        </ButtonGroup>
        )
    }
}