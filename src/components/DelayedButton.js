import React from 'react'

class DelayedButton extends React.Component {
  passClickEvent = e => {
    e.persist()
    window.setTimeout(()=> {
      this.props.onDelayedClick(e)
    }, this.props.delay)
    // console.log('inside delayed button, ' + this.props.onDelayedClick )
    // console.log('inside delayed button, ' + this.props.delay )
  }
  render(){
    return(
      <button onClick={this.passClickEvent} >Delayed</button>
    )
  }
}

export default DelayedButton
