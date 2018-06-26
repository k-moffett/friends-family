import React, { Component } from 'react';
import { Table } from 'reactstrap';
import YesFamCat from './yesFamCat';
import NoFamCat from './noFamCat';

export default class EventTable extends Component {
    familyFriendlyCheck(item, index) {
      let allTitleTerms = []
      let newString = []

      this.props.titlesBL.map((item, index) => {
        allTitleTerms.push(item.item.trim())
      })

      allTitleTerms.map((item) => {
        let temp = item.toString().replace(/\s/g, "")
        newString.push(temp)
      })
      
      let finalString = newString.toString().replace(/[,\/]/g, "")

      switch(finalString.includes(item.title.trim().replace(/\s/g, ""))) {
        case true:
          return this.noFamily(item, index)
          break;
        case false:
          return this.yesFamily(item, index) //this.venueCheck(item, index)
          break;
        default:
          return 'error'
      }
    }

    venueCheck(item, index) {
      let allVenueTerms = []
      let newString = []

      this.props.venuesBL.map((item, index) => {
        allVenueTerms.push(item.svid.trim())
      })

      allVenueTerms.map((item) => {
        let temp = item.toString().replace(/\s/g, "")
        newString.push(temp)
      })
      
      let finalString = newString.toString().replace(/[,\/]/g, "")

      switch(finalString.includes(item.venue.trim().replace(/\s/g, ""))) {
        case true:
          return this.noFamily(item, index)
          break;
        case false:
          return this.yesFamily(item, index)
          break;
        default:
          return 'error'
      }
    }

    yesFamily(item, index) {
      return(
        <tr id={`tr-${(index*1)+1}`}>
        <td><a target='_blank' href={`http://eventful.com/${item.seid}`}>{item.title}</a></td> 
        <td><a target='_blank' href={`http://eventful.com/${item.svid}`}>item.svid</a></td> 
        <td>{item.owner}</td>
        <td>
          <YesFamCat id={(index*1)+1} />
        </td>
      </tr>
    )
    }

    noFamily(item, index) {
      return(
        <tr id={`tr-${(index*1)+1}`} className='noFamily'>
        <td><a target='_blank' href={`http://eventful.com/${item.seid}`}>{item.title}</a></td> 
        <td><a target='_blank' href={`http://eventful.com/${item.svid}`}>item.svid</a></td> 
        <td>{item.owner}</td>
        <td>
          <NoFamCat id={(index*1)+1} />
        </td>
      </tr>
    )
    }

    render() {
      console.log(this.props.currentlyViewedItems, 'All Items')
      console.log(this.props.currentlyViewedItems[0], 'One Item')
      return (
        <Table bordered hover>
          <thead>
            <tr>
                <th>Event</th>
                <th>Venue</th>
                <th>Owner</th>
                <th>Set Family Category</th>
            </tr>
          </thead>
          <tbody>
          {this.props.currentlyViewedItems.map((item, index) => {
            return this.familyFriendlyCheck(item, index)
          })}
          </tbody>
        </Table>
      )
    }
    
}