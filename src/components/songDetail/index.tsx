import React from "react";
import { useParams, useNavigate} from "react-router-dom";

type Song = {
    idTrack: string;
    title: string;
    album: string;
    artist: string;
};

interface SongDetailProps {
    songs: Song[];
}

const SongDetail = ({ songs }: SongDetailProps) => {
    const { id } = useParams<{ id: string }>();

    const navigate = useNavigate();

    const song = songs.find((song) => song.idTrack === id);

    if (!song) {
        return <p>No se encontró la canción.</p>;
    }

    return (
        <section className="song-details">
            <h2>Detalle de canción</h2>
            <p><strong>Nombre:</strong> {song.title}</p>
            <p><strong>Álbum:</strong> {song.album}</p>
            <p><strong>Artista:</strong> {song.artist}</p>
            <button onClick={() => navigate("/")}>
                Volver a búsqueda
            </button>
        </section>
    );
};

export default SongDetail;