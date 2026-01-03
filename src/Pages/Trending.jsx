import { useEffect, useState } from "react";
import { useMovie } from "../Component/useMovie"
import { Link } from "react-router-dom";
import '../App.css';
export default function TrendingPage(){

const {FetchTrending , loding , error} = useMovie();
const [movies , setMovies] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);
      
    // Load movies when page changes
    useEffect(() => {
        const loadMovies = async () => {
            window.scrollTo(0, 0); // ✅ Scroll to top when page changes
            
            const data = await FetchTrending(currentPage);
            if (data && data.results) {
                setMovies(data.results);
                setTotalPages(data.total_pages > 500 ? 500 : data.total_pages); // TMDB max is 500
            }
        };
        loadMovies();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (pageNum) => {
        setCurrentPage(pageNum);
    };

    // Generate page numbers to show
    const getPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5;
        
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);

        // Adjust if near start or end
        if (currentPage <= 3) {
            endPage = Math.min(maxPagesToShow, totalPages);
        }
        if (currentPage >= totalPages - 2) {
            startPage = Math.max(totalPages - maxPagesToShow + 1, 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };

    if (loding) {
        return (
            <div className="loading">
                <div className="spinner"></div>
                <h2>Loading Trending movies... 🎬</h2>
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
        <main className="container">

            <div className="movie-grid">
                {movies.map(movie => (
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

            <div className="pagination">
                <button 
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="pagination-btn"
                >
                    ← Previous
                </button>

                {currentPage > 3 && (
                    <>
                        <button 
                            onClick={() => handlePageClick(1)}
                            className="pagination-btn"
                        >
                            1
                        </button>
                        {currentPage > 4 && <span className="pagination-dots">...</span>}
                    </>
                )}

                {getPageNumbers().map(pageNum => (
                    <button
                        key={pageNum}
                        onClick={() => handlePageClick(pageNum)}
                        className={currentPage === pageNum ? 'pagination-btn active' : 'pagination-btn'}
                    >
                        {pageNum}
                    </button>
                ))}

                {currentPage < totalPages - 2 && (
                    <>
                        {currentPage < totalPages - 3 && <span className="pagination-dots">...</span>}
                        <button 
                            onClick={() => handlePageClick(totalPages)}
                            className="pagination-btn"
                        >
                            {totalPages}
                        </button>
                    </>
                )}

                <button 
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="pagination-btn"
                >
                    Next →
                </button>
            </div>
        </main>
    );



}