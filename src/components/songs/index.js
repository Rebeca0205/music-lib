import React, {Component} from 'react';

class Song extends Component {
    render(){
        return(
            <div className='songComp'>
                <p>{this.props.songName}</p>
                <p>{this.props.artist}</p>
                <p>{this.props.duration}</p>
            </div>
        )
    }

}

export default Song;