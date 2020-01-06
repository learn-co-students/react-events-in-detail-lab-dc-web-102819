// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
    
    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.screenX, e.screenY])
    }

    render() {
        return <button onClick={this.handleClick}>Click Me!</button>
    }
}
