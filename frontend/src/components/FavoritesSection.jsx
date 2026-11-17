import CourseCard from "./CourseCard";

function FavoritesSection({ courses, onSelect, onToggleFavorite }) {
    if (courses.length === 0) {
        return null;
    }

    return (
        <section id="favoritos" className="course-section">
            <div className="course-favorite">
                <h2>Favoritos</h2>
                <p className="section-description">
                    Suas aulas favoritas em um só lugar.
                </p>
            </div>

            <div className="course-grid">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        course={course}
                        onSelect={onSelect}
                        isFavorite={true}
                        onToggleFavorite={onToggleFavorite}
                    />
                ))}
            </div>
        </section>
    );
}

export default FavoritesSection;