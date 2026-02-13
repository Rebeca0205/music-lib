import React, {} from 'react';
import Plus from './img/plus-circle.svg';
import Minus from './img/minus-circle.svg';

const Song = ({songName, artist, duration, onAdd, onRemove}) => {
    const hasAdd = typeof onAdd === 'function';
    const hasRemove = typeof onRemove === 'function';

    return(
        <div className='songComp'>
            <p>{songName}</p>
            <p>{artist}</p>
            <p>{duration}</p>
            {hasAdd && (
                <i className='addIcon' onClick={onAdd}>
                    <img src={Plus} alt='Agregar'/>
                </i>
            )}

            {hasRemove && (
                <i className='addIcon' onClick={onRemove}>
                    <img src={Minus} alt='Agregar'/>
                </i>
            )}
            
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