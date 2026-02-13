import { useEffect, useState } from "react";
import Song from "../songs";

const SearchResults = ({songList, onAddSong}) => {
    const [busqueda, setBusqueda] = useState("");

    const handleInputChange = (e) => {
        setBusqueda(e.target.value);
    };

    return(
        <section>
            <article>
                <h2>Busqueda</h2>
                <div>
                    <input 
                        type='text' 
                        name="nombreCancion"
                        value={busqueda}
                        placeholder='Escribe una cancion'
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
            </article>
            <article className="flexSongs">
                {
                    songList.map(song => {
                        const match = song.songName
                        .toLowerCase()
                        .includes(busqueda);

                        if (!match) return null;

                        const {id, songName, artist, duration} = song;

                        return(
                            <Song 
                                key={id} 
                                songName={songName} 
                                artist={artist} 
                                duration={duration}
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