import React, {Component, useEffect, useState} from 'react';
import Header from '../header';
import SearchResults from '../searchResults';
import Library from '../library';
import {Route, Routes} from "react-router-dom"
import SearchBar from '../searchBar';
import useFetchAlbums from '../hooks/useFetchAlbums';

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
    const [library, setLibrary] = useState([]);
    const [searchTerm, setSearchTerm] = useState("ABBA");

    const {songs, isLoading, error} = useFetchAlbums(searchTerm)

    const addSong = (song) => {
        const exists = library.some((s) => s.id === song.idTrack);
        if (exists) return;

        setLibrary(prev => [...prev, song]);
    };

    const removeSong = (songId) => {
        setLibrary(prev => prev.filter(song => song.idTrack !== songId));
    };

    return (
        <div className="App">
            <Header appName="Mi Biblioteca Musical"/>
            <SearchBar 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <Routes>
                <Route path='/song/id' element=''/>
                <Route path='/' element={<SearchResults songList={songs} isLoading={isLoading} error={error} onAddSong={addSong} searchTerm={searchTerm}/>}/>
            </Routes>
            
            <Library songList={library} onRemoveSong={removeSong}/>
        </div>
    );
};

export default AppComp;