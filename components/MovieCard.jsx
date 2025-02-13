import Image from "next/image"
import Modal from "../components/Modal";
import { useState } from "react";

export default function MovieCard({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex-shrink-0 w-36">
      <Image
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        width={144}
        height={216}
        className="rounded-md hover:opacity-75 transition-opacity duration-300"
        onClick={() => setIsModalOpen(true)}
      />
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={movie.title} id={movie.id} movie={movie} />
    </div>
  )
}

