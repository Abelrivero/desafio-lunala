"use client"

import { useEffect, useState } from "react"
import Header from "../components/Header"
import MovieRow from "../components/MovieRow"

// Usar el token de API como una variable de entorno

const API_TOKEN = process.env.NEXT_PUBLIC_API_KEY
export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }

        const [trendingRes, topRatedRes, upcomingRes] = await Promise.all([
          fetch("https://api.themoviedb.org/3/trending/movie/week", options),
          fetch("https://api.themoviedb.org/3/movie/top_rated", options),
          fetch("https://api.themoviedb.org/3/movie/upcoming", options),
        ])

        const [trending, topRated, upcoming] = await Promise.all([
          trendingRes.json(),
          topRatedRes.json(),
          upcomingRes.json(),
        ])

        setTrendingMovies(trending.results)
        setTopRatedMovies(topRated.results)
        setUpcomingMovies(upcoming.results)
      } catch (error) {
        console.error("Error fetching movies:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header/>
      <main className="container mx-auto px-4 py-4">
        {isLoading ? (
          <div className="text-center">Cargando...</div>
        ) : (
          <>
            <MovieRow title="Tendencias de la semana" movies={trendingMovies} />
            <MovieRow title="Mejor valoradas" movies={topRatedMovies} />
            <MovieRow title="Próximos estrenos" movies={upcomingMovies} />
          </>
        )}
      </main>
    </div>
  )
}

