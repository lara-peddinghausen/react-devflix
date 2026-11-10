import { useState } from "react";
import Header from "./components/Header";
import CourseSection from "./components/CourseSection";
import VideoPlayer from "./components/VideoPlayer";
import { categories } from "./data/courses";

import "./App.css";

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [search, setSearch] = useState("");

  function handleSelectCourse(course) {
    setSelectedCourse(course);
  }

  function handleCloseVideo() {
    setSelectedCourse(null);
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

  const [favorites, setFavorites] = useState([]);

  function handleToggleFavorite(courseId) {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(courseId)
        ? prevFavorites.filter((id) => id !== courseId)
        : [...prevFavorites, courseId]
    );
  }

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