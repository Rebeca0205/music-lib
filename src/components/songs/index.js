import React, {} from 'react';
import Plus from './img/plus-circle.svg';

const Song = ({songName, artist, duration}) => {
    return(
        <div className='songComp'>
            <p>{songName}</p>
            <p>{artist}</p>
            <p>{duration}</p>
            <i className='addIcon'><img src={Plus}/></i>
        </div>
    )
}

// class Song extends Component {
//     render(){
//         return(
//             <div className='songComp'>
//                 <p>{this.props.songName}</p>
//                 <p>{this.props.artist}</p>
//                 <p>{this.props.duration}</p>
//             </div>
//         )
//     }

// }

export default Song;