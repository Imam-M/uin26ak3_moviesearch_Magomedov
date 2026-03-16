import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Home from "./pages/Home"
import Moviedetails from "./pages/Moviedetails"

function App() {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const response = await fetch ('https://www.omdbapi.com/?apikey=eb5d064f&s=James Bond 007&type=movie')

    const data = await response.json()
    setMovies(data.Search.slice(0, 10)) //er array med filmer som tar ut 10 elementer//
  }

  useEffect(() => {
    getMovies()
  }, [])
  return (
    <>
    <header>
      <nav>
        <a href="/">Moviesearch</a>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home movies={movies} />}></Route>
        <Route path="/:movie" element={<Moviedetails />}></Route>
      </Routes>
    </main>
    
    </>
  )
}

export default App