// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

	createArray = (event) => {
		const arr = [event.clientX, event.clientY]
		this.props.onReceiveCoordinates(arr)
	}


	render() {
		return (<button onClick={this.createArray} />)
	}


}
