import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';


export default class NoFamCat extends Component {
    render() {
        return(
          <FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name={`family-${this.props.id}`} value={'family_on'} />{' '}
                Yes
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" checked='checked' name={`family-${this.props.id}`} value={'family_off'} />{' '}
                No
              </Label>
            </FormGroup>
          </FormGroup>
        )
    }
}