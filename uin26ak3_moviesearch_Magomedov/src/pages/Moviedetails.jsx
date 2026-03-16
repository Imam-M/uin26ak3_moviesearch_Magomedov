import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Moviedetails() {
    const { movie: tittel } = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async () => {
        const response = await fetch(`http://www.omdbapi.com/apikey.aspx?VERIFYKEY=b107917b-29d9-4e08-b3e8-e3a25519b125&t=${tittel}&plot=full`)
        const data = await response.json()
        setMovie(data)
    }

    useEffect(() =>{
        getMovie()
    }, [tittel])

    if (!movie) return <p>Laster...</p>

    return (
        <article>
            <nav>
                <a href="/">Tilbake</a>
            </nav>

            <h1>{movie.Title}</h1>
            <p>{movie.Year}</p>

            {movie.Poster && movie.Poster !== 'N/A' && (
                <img src={movie.Poster} alt={`Plakat for ${movie.Title}`}/>
            )}

            {movie.Plot && <p>{movie.Plot}</p>}
        </article>
    )
}

export default Moviedetails