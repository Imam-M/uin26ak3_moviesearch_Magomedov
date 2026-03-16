import { useNavigate } from 'react-router-dom'

function Moviecard({ movie }) {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/${movie.Title}`)
    }

    return (
        <article onClick={handleClick}>
            {movie.Poster && movie.Poster !== 'N/A' ? (
                <img src={movie.Poster} alt={`Plakat for ${movie.Title}`}/> 
            ) : (
                <figure>Ingen plakat</figure> 
            )}
            <footer>
                <h3>{movie.Title}</h3>  
                <p>{movie.Year}</p>   
            </footer>
        </article>
    )
}

export default Moviecard