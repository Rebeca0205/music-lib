import React, {Component, useEffect, useState} from 'react';
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

const AppComp = () => {

    const [library, setLibrary] = useState(YOURSONGS);

    useEffect(() => {
        const fetchSongs = async () => {
            const response = SONGLIST;
            console.log(response);
        };

        fetchSongs();
    }, []);

    const addSong = (song) => {
        const exists = library.some((s) => s.id === song.id);
        if (exists) return;

        setLibrary(prev => [...prev, song]);
    };

    const removeSong = (songId) => {
        setLibrary(prev => prev.filter(song => song.id !== songId));
    };

    return (
        <div className="App">
            <Header appName="Mi Biblioteca Musical"/>
            <SearchResults songList={SONGLIST} onAddSong={addSong}/>
            <Library songList={library} onRemoveSong={removeSong}/>
        </div>
    );
};

export default AppComp;