import { useState, useEffect } from "react"
import Movielist from "../components/Movielist"

function Home({ movies }) {
    const [input, setInput] = useState('')
    const [resultater, setResultater] = useState([])

    useEffect(() => {
        if (input.length <3) {
            setResultater([])
            return
        }
        
        const getMovies = async () => {
            const response = await fetch(`https://www.omdbapi.com/?apikey=eb5d064f&s=${input}&type=movie`)
            const data = await response.json()
            if (data.Search) {
                setResultater(data.Search)
            }
        }

        getMovies()
    }, [input])

    return (
        <section>
            <h1>Filmsøk</h1>

            <section>
                <label htmlFor="søk">Søk etter filmer</label>
                <input
                    id="søk"
                    type="search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Skriv minst 3 tegn..."
                ></input>
            </section>

            {input.length >= 3 && (
                <section>
                    <h2>Resultater for "{input}"</h2>
                    <Movielist movies={resultater} />
                </section>
            )}

            {input.length < 3 && (
                <section>
                    <h2>James Bond filmer</h2>
                    <Movielist movies={movies} />
                </section>
            )}
        </section>
    )
}

export default Home