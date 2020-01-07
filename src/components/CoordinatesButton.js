import React from 'react'

export default class CoordinatesButton extends React.Component {
   
    handleClick = (event) => {
        console.log(this.props.onReceiveCoordinates([event.clientX, event.clientY]))
    }

    render () {
        return <button onClick={this.handleClick}>Coordinates</button>
    }
}
