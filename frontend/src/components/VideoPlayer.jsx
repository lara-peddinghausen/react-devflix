function VideoPlayer({ course, onClose }) {
  if (!course) return null;  // Quando course é null, o componente não renderiza nada

  return (  // Quando uma aula é selecionada, o player aparece.
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={course.title}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Fechar vídeo"
        >
          ✕
        </button>

        <h2>{course.title}</h2>

        <div className="video-container">
          <iframe  // permite incorporar um vídeo do YouTube diretamente na nossa página
            src={`https://www.youtube.com/embed/${course.videoId}`}
            title={course.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen  // permite que o usuário assista em tela cheia.
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;