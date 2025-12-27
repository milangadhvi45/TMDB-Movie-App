// src/Pages/Watchlist.jsx
import { Link } from "react-router-dom";
import { UseMovieContext } from "../MovieContext/WatchlistContext";
import './App.css'
export default function Watchlist() {
    const { WatchList, RemoveWatchlist } = UseMovieContext();

    if (WatchList.length === 0) {
        return (
            <main className="container">
                <div className="empty-watchlist">
                    <span className="empty-icon">📚</span>
                    <h2>Your Watchlist is Empty</h2>
                    <p>Start adding movies to watch later!</p>
                    <Link to="/" className="btn btn-primary">
                        Browse Movies
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="container">
            <h2>My Watchlist ({WatchList.length})</h2>

            <div className="movie-grid">
                {WatchList.map(movie => (
                    <div key={movie.id} className="movie-card watchlist-card">
                        <Link to={`/movie/${movie.id}`}>
                            <img 
                                src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                        : 'https://via.placeholder.com/500x750?text=No+Poster'
                                }
                                alt={movie.title}
                                className="movie-poster"
                            />
                            <div className="movie-info">
                                <h3 className="movie-title">{movie.title}</h3>
                            </div>
                        </Link>
                        <button 
                            onClick={() => RemoveWatchlist(movie.id)}
                            className="remove-btn"
                        >
                            ✕ Remove
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}