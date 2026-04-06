import React, {useState} from 'react';
import Header from '../header';
import SearchResults from '../searchResults';
import Library from '../library';
import {Route, Routes} from "react-router-dom"
import SearchBar from '../searchBar';
import useFetchAlbums from '../hooks/useFetchAlbums';
import SongDetail from '../songDetail';

const AppComp = () => {
    const [library, setLibrary] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const {songs, isLoading, error} = useFetchAlbums(searchTerm)

    const addSong = (song) => {
        const exists = library.some((s) => s.idTrack === song.idTrack);
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
                searchTerm={inputValue}
                setSearchTerm={setInputValue}
                onSearch={() => setSearchTerm(inputValue)}
            />
            <Routes>
                <Route path='/song/:id' element={<SongDetail songs={songs}/>} />
                <Route path='/' element={<SearchResults songList={songs} isLoading={isLoading} error={error} onAddSong={addSong} searchTerm={searchTerm}/>}/>
            </Routes>
            
            <Library songList={library} onRemoveSong={removeSong}/>
        </div>
    );
};

export default AppComp;