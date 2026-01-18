import React, {Component} from 'react';
import Header from '../header';
import SearchResults from '../searchResults';
import Library from '../library';

const SONGLIST = [
    {id: '1', songName:"Gimme Gimme!", artist:"ABBA", duration:"3:00"},
    {id: '2', songName:"Dancing Queen", artist:"ABBA", duration:"2:00"},
    {id: '3', songName:"Bad Romance", artist:"Lady Gaga", duration:"3:00"},
    {id: '4', songName:"The Winner Takes It All", artist:"ABBA", duration:"3:00"},
    {id: '5', songName:"Super Trouper", artist:"ABBA", duration:"2:00"},
    {id: '6', songName:"Mamma Mia!", artist:"ABBA", duration:"2:00"},
    {id: '7', songName:"Monster", artist:"Lady Gaga", duration:"2:00"},
    {id: '8', songName:"Money Money", artist:"ABBA", duration:"2:00"},
    {id: '9', songName:"The Dead Dance", artist:"Lady Gaga", duration:"2:00"},        
]

let YOURSONGS = [
    {id: '3', songName:"Bad Romance", artist:"Lady Gaga", duration:"3:00"}, 
    {id: '7', songName:"Monster", artist:"Lady Gaga", duration:"2:00"},  
    {id: '9', songName:"The Dead Dance", artist:"Lady Gaga", duration:"2:00"}, 
]

class AppComp extends Component {

    componentDidMount(){
        console.log("Se logro cargar el header y las canciones")
    }

    render(){
        return(
            <div className="App">
                <Header appName="Mi Biblioteca Musical"/>
                <SearchResults songList={SONGLIST}/>
                <Library songList={YOURSONGS}/>
            </div>
            
        )
    }
}

export default AppComp;