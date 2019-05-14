// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleBitRateClick = (event) => {
        // console.log(event)
        // let newbitrate = this.state.settings.bitrate
        this.setState({
            // here I change the bitrate to 12
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResoultionClick = (event) => {
        // console.log(event)

        this.setState({
            // here I want to change the resolution
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }


    render(){
        return(
            <div>
                <button onClick={this.handleBitRateClick} className='bitrate'>Changes settings.bitrate </button>
                <button onClick={this.handleResoultionClick} className='resolution'>Change Resolution</button>    
            </div>
        )
    }
}

export default YouTubeDebugger