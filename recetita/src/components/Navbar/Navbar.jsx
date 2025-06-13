import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import logo from '../../utils/images/recetita.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const searchRef = useRef();

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Buscar:', searchTerm);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSearch && searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSearch]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_container}>
        <a href="/">
          <img src={logo} alt="Logo" className={styles.navbar_logo} />
        </a>
      </div>

      <ul className={styles.navbar_links}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Recetas</a></li>
        <li><a href="#">Categorias</a></li>
      </ul>

      <div className={styles.searchContainer} ref={searchRef}>
        <form
          onSubmit={handleSubmit}
          className={`${styles.searchForm} ${showSearch ? styles.show : ''}`}
        >
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
            autoFocus={showSearch}
          />
        </form>
        <FaSearch onClick={toggleSearch} className={styles.searchIcon} />
      </div>
    </nav>
  );
}
