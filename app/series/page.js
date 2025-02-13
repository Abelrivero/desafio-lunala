"use client"

import Header from "@/components/Header"
import MovieRow from "@/components/MovieRow"
import { useEffect, useState } from "react"

const API_TOKEN = process.env.NEXT_PUBLIC_API_KEY
const urlMovieList = 'https://api.themoviedb.org/3/discover/tv';
const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  }

export default function Series(){
    const [series, setSeries] = useState([])
    
        useEffect(() => {
            const fetchSeries = async () => {
              try {
                const res = await fetch(urlMovieList, options)
                if(!res.ok) throw new Error(`Error en la API: ${res.status}`);
        
                const data = await res.json();
                setSeries(data.results);
              } catch (error) {
                console.error("Error fetching movies:", error)
              }
            }
        
            fetchSeries()
          }, [])

    return(
        <div>
            <Header/>
            <div className="container mx-auto px-4 py-4">
                <MovieRow title={"Series"} movies={series}/>
            </div>
        </div>
    )
}