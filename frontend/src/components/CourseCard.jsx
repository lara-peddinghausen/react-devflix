import { GoHeart, GoHeartFill } from "react-icons/go";

function CourseCard({ course, onSelect, isFavorite, onToggleFavorite }) {  // course: objeto com os dados da aula e onSelect: função executada quando o usuário seleciona o card
  const thumbnail = `https://img.youtube.com/vi/${course.videoId}/hqdefault.jpg`;

  return (
    <div className="course-card">

      <button
        type="button"
        className="course-content"
        onClick={() => onSelect(course)}
      >
        <img
          src={thumbnail}
          alt={`Capa da aula ${course.title}`}
        />

        <div className="course-info">
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      </button>

      <button
        type="button"
        className="favorite-button"
        onClick={() => onToggleFavorite(course.id)}
        aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        aria-pressed={isFavorite}
      >
        {isFavorite ? <GoHeartFill /> : <GoHeart />}
      </button>

    </div>
  );
}

export default CourseCard;