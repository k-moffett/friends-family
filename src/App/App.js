import React, { Component } from 'react';
import {TitleBlackListTool, VenueBlacklistTool, Paginator, PageSizeTool, EventTable, } from './components/index';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: [],
        currentPage: 1,
        currentIndex: 0,
        itemsPerPage: 2,
    };
    this.handlePageChange = this.handlePageChange.bind(this)
    this.updateItemsPerPage = this.updateItemsPerPage.bind(this)
    this.setTitleBlacklistItems = this.setTitleBlacklistItems.bind(this)
    this.setVenueBlacklistItems = this.setVenueBlacklistItems.bind(this)
    }

  componentDidMount() {
      this.setInitialState()
  }

  setInitialState() {
      fetch('/api/get_all')
      .then(res => res.json())
      .then(
      (result) => {
          this.setState({
          isLoaded: true,
          items: result[0].events.tabular.events,
          itemsPerPage: result[0].events.tabular.Page_size,
          totalPages: result[0].events.tabular.page_count, //Math.ceil(result[0].length/this.state.itemsPerPage),
          titlesBL: result[1],
          venuesBL: result[2]
          });
      },
      (error) => {
          this.setState({
          isLoaded: true,
          error
          });
        }
      )
  }

  handlePageChange(pageNumber) {
    this.setState({currentPage: pageNumber});
  }

  updateItemsPerPage(int) {
    let newTotalPages = Math.ceil(this.state.items.length/int)
    this.setState({
      itemsPerPage: int,
      totalPages: newTotalPages,
      currentPage: 1
    });
  }

  setTitleBlacklistItems(param) {
    this.setState({
        titlesBL: param
    },() => {console.log(this.state.titlesBL, 'Updated titles blacklist')});
  }

  setVenueBlacklistItems(param) {
    this.setState({
        venuesBL: param
    }, () => {console.log(this.state.venuesBL, 'Updated venues blacklist')});
  }

  getCurrentStartIndex() {
    return ((this.state.currentPage*this.state.itemsPerPage) - this.state.itemsPerPage)
  }

  getCurrentEndIndex() {
    return (this.state.itemsPerPage*this.state.currentPage)
  }

  render() {
    const { error, isLoaded} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return(
      <Container className='App'>
        <h1>Family Category Review Tool</h1>
        <Row>
            <Col xs='4'>
              <TitleBlackListTool 
                setTitleBlacklistItems={this.setTitleBlacklistItems} 
              />
            </Col>
            <Col xs='4'>
              <VenueBlacklistTool 
                setVenueBlacklistItems={this.setVenueBlacklistItems} 
              />
            </Col>
            <Col xs='4'>
            </Col>
        </Row>
        <Row>
            <Col>
              <Paginator 
                handlePageChange={this.handlePageChange} 
                totalPages={this.state.totalPages}
              />
            </Col>
            <Col>
              {/*<PageSizeTool 
                updateItemsPerPage={this.updateItemsPerPage} 
                itemsLength={this.state.items.length}
              />*/}
            </Col>
        </Row>
        <Row>
            <Col>
              <EventTable 
                currentlyViewedItems={this.state.items}  //old paginator => this.state.items.slice(this.getCurrentStartIndex(), this.getCurrentEndIndex())
                titlesBL={this.state.titlesBL}
                venuesBL={this.state.venuesBL}
              />
            </Col>
        </Row>
      </Container >
    )
    }
  }

}

export default App;