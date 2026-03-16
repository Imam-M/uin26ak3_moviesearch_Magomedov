import { Routes, Route } from "react-router-dom"
import { UseState, useEffect } from 'react'
import Home from './pages/Home'

function App() {
  const [movies, setMovies] = UseState([])

  const getMovies = async () => {
    const response = await fetch ('http://www.omdbapi.com/apikey.aspx?VERIFYKEY=b107917b-29d9-4e08-b3e8-e3a25519b125')

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
        <Route path="/" element={<Home />}></Route>
        <Route path="/:movie" element={<a />}></Route>
      </Routes>
    </main>
    
    </>
  )
}

export default App