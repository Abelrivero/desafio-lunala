"use client"

import { useRef } from "react";
import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies }) {
  const containerRef = useRef(null);
  const scrollAmount = 150; // Cantidad de píxeles que se moverá al hacer clic en los botones

  if (!movies || movies.length === 0) {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p>No hay películas disponibles en esta categoría.</p>
      </section>
    );
  }

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="relative flex items-center">
        {/* Botón Izquierdo */}
        <button className="carousel-btn left" onClick={scrollLeft}>&lt;</button>

        {/* Contenedor de las películas */}
        <div className="carousel-container" ref={containerRef}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Botón Derecho */}
        <button className="carousel-btn right" onClick={scrollRight}>&gt;</button>
      </div>
    </section>
  );
}