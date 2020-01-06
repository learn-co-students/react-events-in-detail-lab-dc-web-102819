// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {
    

    clickHandler = (e) => {
        e.persist()
        let delayClick = () => this.props.onDelayedClick(e)
        let delay = this.props.delay

        setTimeout(delayClick, delay)
    }
    
    render() {
        return <button onClick={this.clickHandler}>Click Me and Wait!</button>
    }
}
