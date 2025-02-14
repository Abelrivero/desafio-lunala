import Header from "../../components/Header";
import MovieRow from "../../components/MovieRow";

const API_TOKEN = process.env.NEXT_PUBLIC_API_KEY;
const urlMovieList = "https://api.themoviedb.org/3/discover/movie";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
  // Usar no-store para asegurarnos de que siempre se obtienen los datos actualizados
  cache: "no-store",
};

export default async function Peliculas() {
  let movies = [];
  try {
    // Verifica que la API_TOKEN se esté leyendo correctamente
    if (!API_TOKEN) {
      console.error("La variable de entorno NEXT_PUBLIC_API_KEY no está definida.");
    }
    const res = await fetch(urlMovieList, options);
    if (!res.ok) {
      console.error(`Error en la API: ${res.status}`);
    } else {
      const data = await res.json();
      movies = data.results || [];
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <MovieRow title="Películas" movies={movies} />
      </div>
    </div>
  );
}