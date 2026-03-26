import React, { useEffect, useState } from "react";
import Song from "../songs";

const SearchResults = ({songList, isLoading, error, onAddSong, searchTerm}) => {
    if (isLoading) return <p>Cargando canciones...</p>;
    if (error) return <p>{error}</p>;
    if (!songList.length) return <p>No se encontraron canciones.</p>;

    // const [busqueda, setBusqueda] = useState("");

    // const handleInputChange = (e) => {
    //     setBusqueda(e.target.value);
    // };

    return(
        <section>
            <article>
                <h2>Busqueda</h2>
            </article>
            <article className="flexSongs">
                {
                    songList.map(song => {
                        const match = song.artist
                        .includes(searchTerm.toLowerCase());

                        if (!match) return null;

                        const {idTrack, title, artist} = song;

                        return(
                            <Song 
                                key={idTrack} 
                                songName={title} 
                                artist={artist} 
                                onAdd={() => onAddSong(song)}
                            />
                        );
                    })
                }
            </article>    
        </section>
    )
};

export default SearchResults;