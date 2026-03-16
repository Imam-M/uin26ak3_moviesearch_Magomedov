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
            const response = await fetch(`http://www.omdbapi.com/apikey.aspx?VERIFYKEY=b107917b-29d9-4e08-b3e8-e3a25519b125&s=${input}`)
            const data = await response.json()
            setResultater(data.Search)
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