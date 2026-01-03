// src/Components/Navbar.jsx
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UseMovieContext } from '../MovieContext/WatchlistContext';
import '../Stylefolder/Navbar.css';

export default function Navbar({onSearch}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { WatchList } = UseMovieContext();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            onSearch(searchQuery);
            navigate('/');
            setSearchQuery('');
        }
    };

    const handleClear = () => {
        setSearchQuery('');
        onSearch('');
    };

    return (
        <nav className="navbar">
            {/* Top Row: Logo, Search, Watchlist */}
            <div className="navbar-top">
                <div className="nav-container">
                    {/* Logo */}
                    <Link to="/" className="logo">
                        <span className="logo-icon">🎬</span>
                        <span className="logo-text">CineVerse</span>
                    </Link>

                    {/* Search Bar */}
                    <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="text"
                            placeholder="Search movies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        {searchQuery && (
                            <button 
                                type="button" 
                                onClick={handleClear}
                                className="search-clear"
                            >
                                ✕
                            </button>
                        )}
                        <button type="submit" className="search-btn">
                            🔍
                        </button>
                    </form>

                    {/* Watchlist Icon */}
                    <Link to="/watchlist" className="watchlist-icon">
                        <span className="icon">📚</span>
                        {WatchList.length > 0 && (
                            <span className="watchlist-badge">{WatchList.length}</span>
                        )}
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Bottom Row: Navigation Links */}
            <div className={`navbar-bottom ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <div className="nav-container">
                    <div className="nav-links">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/popular" 
                            className={({ isActive }) => 
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Popular
                        </NavLink>
                        <NavLink 
                            to="/trending" 
                            className={({ isActive }) => 
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Trending
                        </NavLink>
                        <NavLink 
                            to="/top-rated" 
                            className={({ isActive }) => 
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Top Rated
                        </NavLink>
                        <NavLink 
                            to="/watchlist" 
                            className={({ isActive }) => 
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Watchlist
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}