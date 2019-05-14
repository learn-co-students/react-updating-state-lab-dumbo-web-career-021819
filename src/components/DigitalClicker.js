// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{

    state = {
        timesClicked: 0
    }

    handleClick = (event) => {
        //here I want to increment timesClicked
        // console.log(event.target)
        let newValue = this.state.timesClicked
        this.setState({
            timesClicked: newValue + 1 
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick} >{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker