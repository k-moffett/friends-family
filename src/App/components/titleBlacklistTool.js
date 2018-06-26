import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
const axios = require('axios')

export default class TitleBlacklist extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
      }
 
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleClick() {
        let updateState = this.props.setTitleBlacklistItems
        axios.post('/api/title_blacklist', {
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
                    <Label for="titleBlacklist">Title Blacklist</Label>
                    <Input value={this.state.value} onChange={this.handleChange} type="text" name="titleBlacklist" id="title-bl" placeholder="enter a term to blacklist" />
                </FormGroup>
                <Button onClick={(e) => {this.handleClick()}}>Submit</Button>
            </Form>
        )
    }

}