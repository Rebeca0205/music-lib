import React, {Component} from 'react';
import Header from '../header';
import Song from '../songs';

class AppComp extends Component {

    componentDidMount(){
        console.log("Se logro cargar el header y las canciones")
    }

    render(){
        return(
            <div className="App">
                <Header appName="Mi Biblioteca Musical"/>
                <section>
                    <div className="flexSongs">
                    <Song songName="Gimme Gimme!" artist="ABBA" duration="3:00"/>
                    <Song songName="Dancing Queen" artist="ABBA" duration="2:00"/>
                    <Song songName="The Winner Takes It All" artist="ABBA" duration="3:00"/>
                    </div>
                </section>
            </div>
            
        )
    }
}

export default AppComp;