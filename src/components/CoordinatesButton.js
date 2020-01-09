// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
    
    handleClick = (event) => {
        console.log(event)
        let clientX = event.clientX
        let clientY = event.clientY
        this.props.onReceiveCoordinates([clientX, clientY])
    }

    render(){
        return(
            <button onClick = {this.handleClick}>Coordinates</button>
        )
    }
}