import React, {} from 'react';

const Header = ({appName}) => {
    return(
        <header className='App-header'>
            <h1>{appName}</h1>
        </header>
    )
}

// class Header extends Component {
//     render(){
//         return(
//             <header className='App-header'>
//                 <h1>{this.props.appName}</h1>
//             </header>
//         )
//     }
// }

export default Header;