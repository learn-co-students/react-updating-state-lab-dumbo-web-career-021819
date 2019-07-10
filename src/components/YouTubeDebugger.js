// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor() {
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

  handleBit = () => {
    this.setState(oldState => ({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }))
  }

  handleRes = () => {
    this.setState(oldState => ({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    }))
  }

  render() {
    return (
      <div className="buttons">
        <button className="bitrate" onClick={this.handleBit}/>
        <button className="resolution" onClick={this.handleRes}/>
      </div>
      )
  }

}
