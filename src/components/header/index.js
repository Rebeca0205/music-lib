import React, {} from 'react';
import { AppHeader } from './styles';

const Header = ({appName}) => {
    return(
        <AppHeader>
            <h1>{appName}</h1>
        </AppHeader>
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