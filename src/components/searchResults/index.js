import React, { useEffect, useState } from "react";
import Song from "../songs";

const SearchResults = ({songList, isLoading, error, onAddSong}) => {
    if (isLoading) return <p style={{color: 'white'}}>Cargando canciones...</p>;
    if (error) return <p style={{color: 'red'}}>{error}</p>;
    if (!songList.length) return <p style={{color: 'yellow'}}>No se encontraron canciones.</p>;

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
                {songList.map((song) => {
                    const { idTrack, title, artist } = song;

                    return (
                        <Song
                            key={idTrack}
                            id={idTrack}
                            songName={title}
                            artist={artist}
                            onAdd={() => onAddSong(song)}
                        />
                    );
                })}
            </article>
        </section>
    )
};

export default SearchResults;