import React, { Component } from 'react';

export default class CoordinatesButton extends Component{

    eventHandle=(e)=>{
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return (
            <button onClick={this.eventHandle}></button>
        );
    }
}