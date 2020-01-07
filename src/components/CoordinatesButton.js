import React, {Component} from 'react'

class CoordinatesButton extends Component {
  createArray = (e) => {

    let X = e.screenX
    let Y = e.screenY
    return this.props.onReceiveCoordinates([X, Y])
  }

  render(){
    return(
      <button onClick={this.createArray}>Coordinates Button</button>
    )
  }
}

export default CoordinatesButton
