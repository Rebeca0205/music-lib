import { useEffect, useState } from "react";
import Song from "../songs";

const Library = ({songList, onRemoveSong}) => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const response = songList;
            setLista(response);
        };

        fetchSongs();

    }, [songList]);

    return(
        <section>
            <h2>Mis Canciones</h2>
            <article className="flexSongs">
                {
                    lista.map(song => {
                        const {id, songName, artist, duration} = song;

                        return(
                            <Song 
                                key={id} 
                                songName={songName} 
                                artist={artist} 
                                duration={duration}
                                onRemove={() => onRemoveSong(id)}
                            />
                        );
                    })
                }
            </article>   
        </section>
    )
}

export default Library;