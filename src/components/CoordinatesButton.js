// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        console.log(this.props)
        return (
            <button
                onClick={this.handleClick}>
                Mouse Coordinates
            </button>
        )
    }
}