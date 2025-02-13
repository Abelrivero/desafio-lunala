import MovieCard from "./MovieCard"

export default function MovieRow({ title, movies }) {
  if (!movies || movies.length === 0) {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p>No hay películas disponibles en esta categoría.</p>
      </section>
    )
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex item-center">
        <button className="pb-4">&lt;</button>
        <div className="flex gap-1 overflow-x-auto pb-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button>&gt;</button>
      </div>
    </section>
  )
}

