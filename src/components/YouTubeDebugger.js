// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateTo12 = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  resolutionTo720p = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }
  
  render(){
    return(
      <div>
        <button onClick={this.bitrateTo12} className='bitrate'>X</button>
        <button onClick={this.resolutionTo720p} className='resolution'>@</button>
      </div>
    )
  }
}