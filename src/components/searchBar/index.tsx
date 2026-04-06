import React from "react"

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    onSearch: () => void;
}

const SearchBar = ({searchTerm, setSearchTerm, onSearch}: SearchBarProps) => {
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch();
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Escribe el nombre de un artista"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Buscar</button>
        </form>
    );
}

export default SearchBar;