import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

function Header({ categories, onSearch }) {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    const value = event.target.value;
    setSearch(value);
    onSearch(value);
  }

  return (
    <header className="header">
      <div className="areaLogo">
        <a href="#home" className="logo">
          DEVFLIX
        </a>
        <GoDotFill className="logoDot" />
      </div>

      <nav aria-label="Menu principal">
        <a href="#home">Home</a>

        {categories.map((category) => (  // map() percorre o array e cria um link para cada categoria
          <a key={category.id} href={`#${category.id}`}>
            {category.title}
          </a>
        ))}
      </nav>

      <div className="areaBusca">
        <GoSearch className="iconeBusca" />

        <input
          type="search"
          placeholder="Buscar vídeos..."
          value={search}
          onChange={handleSearch}
          aria-label="Buscar vídeos"
        />
      </div>
    </header>
  );
}

export default Header;



