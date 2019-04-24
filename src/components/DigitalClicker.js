import React from 'react';

export default class DigitalClicker extends React.Component {

state = {
  timesClicked: 0
}

increaseClick = () => {
  this.setState({
    timesClicked: this.state.timesClicked + 1
  })
}

  render() {
    return(
        <div>
          <button onClick={this.increaseClick}>{this.state.timesClicked}</button>
        </div>
    )
  }
}
