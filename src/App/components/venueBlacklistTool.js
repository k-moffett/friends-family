import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
const axios = require('axios')

export default class VenueBlacklist extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
      }
 
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleClick() {
        let updateState = this.props.setVenueBlacklistItems
        axios.post('/api/venue_blacklist', {
            term: this.state.value,
          })
          .then(function (response) {
            updateState(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return(
            <Form>
                <FormGroup>
                    <Label for="titleBlacklist">Venue Blacklist</Label>
                    <Input value={this.state.value} onChange={this.handleChange} type="text" name="venueBlacklist" id="venue-bl" placeholder="enter a venue to blacklist" />
                </FormGroup>
                <Button onClick={(e) => {this.handleClick()}}>Submit</Button>
            </Form>
        )
    }

}