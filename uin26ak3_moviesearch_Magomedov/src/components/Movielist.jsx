import Moviecard from './Moviecard'

function Movielist({ movies }) {
    if (!movies || movies.length === 0) return null

    return (
        <section>
            <ul>
                {movies.map((movie) => (
                    <li key={index}>
                        <Moviecard movie={movie} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Movielist