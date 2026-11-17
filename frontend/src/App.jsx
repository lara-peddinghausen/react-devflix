import { useState } from "react";
import Header from "./components/Header";
import CourseSection from "./components/CourseSection";
import VideoPlayer from "./components/VideoPlayer";
import { categories } from "./data/courses";
import FavoritesSection from "./components/FavoritesSection";
import "./App.css";

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  function handleSelectCourse(course) {
    setSelectedCourse(course);
  }

  function handleCloseVideo() {
    setSelectedCourse(null);
  }

  function handleToggleFavorite(courseId) {  // Adiciona ou remove cursos dos favoritos
    setFavorites((prevFavorites) =>
      prevFavorites.includes(courseId)
        ? prevFavorites.filter((id) => id !== courseId)
        : [...prevFavorites, courseId]
    );
  }

  // Filtra os cursos dentro de cada categoria
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      courses: category.courses.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((category) => category.courses.length > 0);  // remove categorias que ficaram sem cursos.

  function handleToggleFavorite(courseId) {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(courseId)
        ? prevFavorites.filter((id) => id !== courseId)
        : [...prevFavorites, courseId]
    );
  }

  const allCourses = categories.flatMap(
    (category) => category.courses
  );

  const favoriteCourses = allCourses.filter(   // Seleciona os cursos favoritos, evitando duplicações
    (course, index, array) =>
      favorites.includes(course.id) &&
      array.findIndex((item) => item.id === course.id) === index
  );

  return (
    <>
      <Header categories={categories} onSearch={setSearch} />

      <main id="home">
        <section className="hero">
          <h1>Bem-vindo ao DevFlix</h1>
          <h3>Aprenda programação com aulas gratuitas.</h3>
          <p>Ideias ganham vida quando você sabe construir.</p>
          <p>Domine a lógica e crie projetos reais, mesmo começando do zero.</p>
          <a href="#frontend" className="hero-button">
            Começar a aprender
          </a>
        </section>

        {/* Seção de favoritos */}
        <FavoritesSection
          courses={favoriteCourses}
          onSelect={handleSelectCourse}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* Seções de cursos */}
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <CourseSection  // recebe somente os cursos encontrados.
              key={category.id}
              category={category}
              onSelect={handleSelectCourse}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />
          ))
        ) : (
          <p>Nenhum curso encontrado.</p>
        )}
      </main>

      <VideoPlayer
        course={selectedCourse}
        onClose={handleCloseVideo}
      />
    </>
  );
}

export default App;