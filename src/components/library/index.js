import { useEffect, useState } from "react";
import Song from "../songs";
import { FlexSongs } from "./styles";

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
            <FlexSongs>
                {
                    lista.map(song => {
                        const {idTrack, title, artist} = song;

                        return(
                            <Song 
                                key={idTrack} 
                                id={idTrack}
                                songName={title} 
                                artist={artist} 
                                onRemove={() => onRemoveSong(idTrack)}
                            />
                        );
                    })
                }
            </FlexSongs>   
        </section>
    )
}

export default Library;