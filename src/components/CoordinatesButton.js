// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {


  handleClick = (event) => {
    // const target = event.target
    const mouseCoordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(mouseCoordinates)
    // call the callback prop onReceiveCoordinates (a function provided by ReactDOM in index.js)
    // give the callback prop the coordinates x and y
  }
  
  render() {
    return(
      <div>
        <button 
          onClick={this.handleClick}
        >
          COORDINATES
        </button>
      </div>
    )
  }
}