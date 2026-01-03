import { useEffect, useState } from "react";
import { useMovie } from "../Component/useMovie";
import { Link } from "react-router-dom";
export default function Home({searchQuery}) {
  const {FetchTrending , FetchPopular , FetchMovie , searchMovie} = useMovie();  
  const [trendingMovies , settrendingMovies] = useState([])
  const [popularMovies , setpopularMovies] = useState([])
  const [topRatedMovies , setTopRatedMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const LoadAllSection = async () => {
        const trendingDATA = await FetchTrending(1);
        if (trendingDATA && trendingDATA.results) {
            settrendingMovies(trendingDATA.results.slice(0, 10))
        }

          const popularData = await FetchPopular(1);
            if (popularData && popularData.results) {
                setpopularMovies(popularData.results.slice(0, 10)); // First 10
            }

            // Fetch Top Rated
            const topRatedData = await FetchMovie(1);
            if (topRatedData && topRatedData.results) {
                setTopRatedMovies(topRatedData.results.slice(0, 10)); // First 10
            }
    }

    LoadAllSection();
  },[])

    useEffect(() => {
        const performSearch = async () => {
            if (searchQuery && searchQuery.trim()) {
                console.log('🔍 Searching for:', searchQuery);
                setIsSearching(true);
                
                const data = await searchMovie(searchQuery);
                if (data && data.results) {
                    console.log('✅ Found', data.results.length, 'movies');
                    setSearchResults(data.results);
                } else {
                    setSearchResults([]);
                }
                
                setIsSearching(false);
            } else {
                // Clear search if query is empty
                setSearchResults([]);
                setIsSearching(false);
            }
        };

        performSearch();
    }, [searchQuery]);  // Run when searchQuery changes

 if (searchResults.length > 0 || (searchQuery && searchQuery.trim())) {
        return (
            <main className="container">
                <h2 id="movieslength">
                    {searchResults.length > 0 
                        ? `Search Results for "${searchQuery}" (${searchResults.length})`
                        : `No results found for "${searchQuery}"`
                    }
                </h2>

                {isSearching ? (
                    <div className="loading">
                        <div className="spinner"></div>
                        <p>Searching...</p>
                    </div>
                ) : searchResults.length === 0 ? (
                    <div className="no-results">
                        <h3>No movies found 😕</h3>
                        <p>Try a different search term</p>
                    </div>
                ) : (
                    <div className="movie-grid">
                        {searchResults.map(movie => (
                            <Link 
                                to={`/movie/${movie.id}`}
                                key={movie.id} 
                                className="movie-card"
                            >
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
        );
    }

    return (
        <main className="container">
            <h2 id="trendingheading">🔥 Trending Movies</h2>
            <div className="movie-grid">
                {trendingMovies.slice(0, 10).map(movie => (
                    <Link 
                        to={`/movie/${movie.id}`}
                        key={movie.id} 
                        className="movie-card"
                    >
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

            <h2>⭐ Popular Movies</h2>
            <div className="movie-grid">
                {popularMovies.slice(0, 10).map(movie => (
                    <Link 
                        to={`/movie/${movie.id}`}
                        key={movie.id} 
                        className="movie-card"
                    >
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

            <h2>🏆 Top Rated</h2>
            <div className="movie-grid">
                {topRatedMovies.slice(0, 10).map(movie => (
                    <Link 
                        to={`/movie/${movie.id}`}
                        key={movie.id} 
                        className="movie-card"
                    >
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
        </main>
    );
}
