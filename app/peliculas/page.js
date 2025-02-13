"use client"

import Header from "@/components/Header"
import MovieRow from "@/components/MovieRow"
import { useEffect, useState } from "react"


const API_TOKEN = process.env.NEXT_PUBLIC_API_KEY
const urlMovieList = 'https://api.themoviedb.org/3/discover/movie';
const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  }
export default function Peliculas(){
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
          try {
            const res = await fetch(urlMovieList, options)
            if(!res.ok) throw new Error(`Error en la API: ${res.status}`);
    
            const data = await res.json();
            setMovies(data.results);
          } catch (error) {
            console.error("Error fetching movies:", error)
          }
        }
    
        fetchMovies()
      }, [])

    return(
        <div>
            <Header />
            <div className="container mx-auto px-4 py-4">
                <MovieRow title={"Peliculas"} movies={movies}/>
            </div>
        </div>
    )
}