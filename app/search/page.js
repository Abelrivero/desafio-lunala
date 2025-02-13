"use client";

import Header from "@/components/Header";
import MovieRow from "@/components/MovieRow";
import { useState, useEffect } from "react";

export default function Search() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [categories, setCategories] = useState([]);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearch] = useState("");

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  useEffect(() => {
    //Consulta y Carga las Categorias al Select
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${BASE_URL}/genre/movie/list?language=es-ES`, options);
        if (!res.ok) throw new Error(`Error en la respuesta de la API: ${res.status}`);

        const data = await res.json();
        if (data.genres && Array.isArray(data.genres)) {
          setCategories(data.genres);
        } else {
          throw new Error("La respuesta de la API no tiene el formato esperado");
        }
      } catch (err) {
        console.error("Error cargando las categorías:", err);
      }
    };

    fetchCategories();
  }, []);

  
  useEffect(() => {
    if (!selectedGenre || searchTerm.trim() !== "") {
      setMovies([]); 
      return;
    }
    //Busca las Peliculas por Genero
    const fetchMoviesByGenre = async () => {
      try {
        const res = await fetch(`${BASE_URL}/discover/movie?with_genres=${selectedGenre}&language=es-ES&page=1`, options);
        if (!res.ok) throw new Error("Error al obtener películas");

        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMoviesByGenre();
  }, [selectedGenre]); 

  //Busca Peliculas por Titulo
  const fetchMovies = async (searchTerm) => {
    if (!searchTerm.trim()) {
      setMovies([]); 
      setSelectedGenre(""); 
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/search/movie?query=${searchTerm}&language=es-ES`, options);
      if (!res.ok) throw new Error(`Error en la API: ${res.status}`);

      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error("Error al buscar películas:", err);
    }
  };

  
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);

    if (!searchTerm.trim()) {
      setMovies([]); 
      setSelectedGenre(""); 
      return;
    }

    setTimeout(() => fetchMovies(searchTerm), 1500);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-4">
        <h1>Buscador</h1>
        <div className="flex gap-1">
          <input
            type="text"
            placeholder="Buscar Películas..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            onChange={(e) => setSelectedGenre(e.target.value)}
            value={selectedGenre}
            className="search-select"
            disabled={searchTerm.trim() !== ""} 
          >
            <option value="">Categorías</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        
        {movies.length > 0 && <MovieRow title="Encontrados" movies={movies} />}
      </div>
    </div>
  );
}