import {  useEffect,useState } from 'react';
import { useMovie } from '../Component/useMovie'
import { Link } from 'react-router-dom';
//import { MovieProvider } from './MovieContext/WatchlistContext';

export default function Toprated() {
//    const { loading, error, fetchMovie, searchMovie } = useMovie();
      const {FetchMovie, loding , error ,searchMovie} = useMovie();
      const [movies, setMovies] = useState([]);

    // ✅ Load popular movies on mount
    useEffect(() => {
        const loadPopular = async () => {
            const data = await FetchMovie();
            if (data && data.results) {
                setMovies(data.results);
            }
        };
        loadPopular();
    }, []);
       
    //   <h2>
    //                 {searchQuery 
    //                     ? `Search Results for "${searchQuery}" (${movies.length})`
    //                     : `Popular Movies (${movies.length})`
    //                 }
    //             </h2>

    if (loding) {
        return (
            <div className="loading">
                <div className="spinner"></div>
                <h2>Loading movies... 🎬</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error">
                <h2>❌ Error: {error}</h2>
                <button onClick={() => window.location.reload()}>
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="app">
            <header className="header">
            </header>

            <main className="container">
              

                {movies.length === 0 ? (
                    <div className="no-results">
                        <h3>No movies found 😕</h3>
                        <p>Try a different search term</p>
                    </div>
                ) : (
                    <div className="movie-grid">
                        {movies.map(movie => (
                            <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card">
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
                                    <div className="movie-meta">
                                        <span className="rating">
                                            ⭐ {movie.vote_average.toFixed(1)}
                                        </span>
                                        <span className="year">
                                            {movie.release_date?.split('-')[0] || 'N/A'}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </main>
      
     
        </div>          
    );
}