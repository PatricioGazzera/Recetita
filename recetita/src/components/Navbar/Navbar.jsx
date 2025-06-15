import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import logo from '../../utils/images/recetita.png';
import styles from './Navbar.module.css';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';
import Categories from '../Categories/Categories';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const searchRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
    <nav className={`${styles.navbar} ${scrolled ? styles.small : ''}`}>
      <div className={styles.logo_container}>
        <a href="/">
          <img src={logo} alt="Logo" className={styles.navbar_logo} />
        </a>
      </div>

      <ul className={styles.navbar_links}>
        <li><Link to="/" onClick={<Home/>}>Inicio</Link></li>
        <li><Link to="/recipes" onClick={<Recipes/>}>Recetas</Link></li>
        <li><Link to="/categories" onClick={<Categories/>}>Categorias</Link></li>
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
