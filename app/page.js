
import Header from "../components/Header";
import MovieRow from "../components/MovieRow";

const API_TOKEN = process.env.NEXT_PUBLIC_API_KEY;

async function fetchMovies() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      cache: "no-store",
    };

    const [trendingRes, topRatedRes, upcomingRes] = await Promise.all([
      fetch("https://api.themoviedb.org/3/trending/movie/week", options),
      fetch("https://api.themoviedb.org/3/movie/top_rated", options),
      fetch("https://api.themoviedb.org/3/movie/upcoming", options),
    ]);

    const [trending, topRated, upcoming] = await Promise.all([
      trendingRes.json(),
      topRatedRes.json(),
      upcomingRes.json(),
    ]);

    return {
      trendingMovies: trending.results || [],
      topRatedMovies: topRated.results || [],
      upcomingMovies: upcoming.results || [],
    };
  } catch (error) {
    console.error("Error fetching movies:", error);
    return {
      trendingMovies: [],
      topRatedMovies: [],
      upcomingMovies: [],
    };
  }
}

export default async function Home() {
  const { trendingMovies, topRatedMovies, upcomingMovies } = await fetchMovies();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-4">
        <MovieRow title="Tendencias de la semana" movies={trendingMovies} />
        <MovieRow title="Mejor valoradas" movies={topRatedMovies} />
        <MovieRow title="Próximos estrenos" movies={upcomingMovies} />
      </main>
    </div>
  );
}

