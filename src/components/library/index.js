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
                        const {idTrack, title, artist} = song;

                        return(
                            <Song 
                                key={idTrack} 
                                songName={title} 
                                artist={artist} 
                                onRemove={() => onRemoveSong(idTrack)}
                            />
                        );
                    })
                }
            </article>   
        </section>
    )
}

export default Library;