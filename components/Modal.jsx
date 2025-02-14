export default function Modal({ isOpen, onClose, title, children, movie}) {
    if (!isOpen) return null; // Si el modal está cerrado, no renderizar nada
    
    return (
      <div className="modal-overlay">
        <div className="modal-content items-center">
          <h2 className="text-dark">Titulo: {title}</h2>
          <img 
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
            alt={movie.title}
            width={144}
            height={216}/>
            <p className="text-dark">Descripcion: {movie.overview}</p>
            <p className="text-dark">Fecha de Estreno: {movie.release_date || movie.first_air_date}</p>
          <button className="close-button" onClick={onClose}>✖</button>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    );
  }