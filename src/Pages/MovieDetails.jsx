//  import { useEffect, useState } from "react";
//  import { useMovie } from "../Component/useMovie"
// import { useParams } from "react-router-dom";
 
// export default function TrendingcardPage(){
//     const {FetchCard } = useMovie();
//     const {id} = useParams();
// //     const [Trending , setTrending] = useState([]);
//        const [card , setcard] = useState([])
// //     const {MovieId} = useParams([]);

//     useEffect(() => {
//  const LoadTrending = async () => {
//        let data = await FetchCard(id);
//        console.log(data);       
//        if (data) {
//          setcard(data);
//        } 
//     }
//     LoadTrending()
//     } , [id])
  
//    if (!card) {
//     throw new Error('inner data not found')
//    }
   

//     return(
//       <div>
 

  

//     <div>
//         <h1>{card.title}</h1>
//     </div>



//       </div>  
//     )
// }



import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useMovie } from '../Component/useMovie';
//import { useMovieContext } from '../MovieContext/WatchlistContext';
import { UseMovieContext } from '../MovieContext/WatchlistContext';
import '../Stylefolder/index.css'
export default function MovieDetails() {
    const { id } = useParams();  
    const navigate = useNavigate();
    
    const { FetchCard, loding, error } = useMovie();
    const { WatchList, RemoveWatchlist, AddWatchlist } = UseMovieContext();
   // WatchList
    const [movie, setMovie] = useState(null);


    useEffect(() => {
   
    const loadMovie = async () => {
        const data = await FetchCard(id);
        
        if (data) {
            setMovie(data);
        }
    };
    loadMovie();
}, [id]);
    // Check if movie is in watchlist
    const isInWatchlist = WatchList.some(item => item.id === Number(id));

    const handleWatchlist = () => {
        if (!movie) return;
        
        if (isInWatchlist) {
            RemoveWatchlist(Number(id));
        } else {
            AddWatchlist({
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path
            });
        }
    };

    if (loding) {
        return (
            <div className="loading">
                <div className="spinner"></div>
                <h2>Loading movie details... 🎬</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error">
                <h2>❌ Error: {error}</h2>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }

    if (!movie) {
        return (
            <div className="loading">
                <h2>No movie data found</h2>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }

    // Get trailer
    const trailer = movie.videos?.results?.find(
        video => video.type === 'Trailer' && video.site === 'YouTube'
    );

    return (
        <div className="movie-details">
            {/* Backdrop */}
            <div 
                className="movie-backdrop"
                style={{
                    backgroundImage: movie.backdrop_path 
                        ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                        : 'none',
                    backgroundColor: movie.backdrop_path ? 'transparent' : '#1a1a1a'
                }}
            >
                <div className="backdrop-overlay"></div>
            </div>

            <div className="details-container">
                <button onClick={() => navigate(-1)} className="back-btn">
                    ← Back
                </button>

                <div className="details-content">
                    {/* Poster */}
                    <div className="poster-section">
                        <img 
                            src={
                                movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                    : 'https://via.placeholder.com/500x750?text=No+Poster'
                            }
                            alt={movie.title}
                            className="details-poster"
                        />
                        <button 
                            onClick={handleWatchlist}
                            className={isInWatchlist ? "btn-watchlist active" : "btn-watchlist"}
                        >
                            {isInWatchlist ? '✓ In Watchlist' : '+ Add to Watchlist'}
                        </button>
                    </div>

                    {/* Info */}
                    <div className="info-section">
                        <h1 className="movie-title-large">{movie.title}</h1>
                        
                        <div className="movie-meta-large">
                            <span className="rating-large">⭐ {movie.vote_average?.toFixed(1) || 'N/A'}</span>
                            <span>{movie.release_date?.split('-')[0] || 'N/A'}</span>
                            <span>{movie.runtime ? `${movie.runtime} min` : 'N/A'}</span>
                        </div>

                        {/* Genres */}
                        {movie.genres && movie.genres.length > 0 && (
                            <div className="genres">
                                {movie.genres.map(genre => (
                                    <span key={genre.id} className="genre-tag">
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Tagline */}
                        {movie.tagline && (
                            <p className="tagline">"{movie.tagline}"</p>
                        )}

                        {/* Overview */}
                        <div className="overview-section">
                            <h3>Overview</h3>
                            <p>{movie.overview || 'No overview available.'}</p>
                        </div>

                        {/* Trailer */}
                        {trailer && (
                            <div className="trailer-section">
                                <h3>Trailer</h3>
                                <iframe
                                    width="100%"
                                    height="400"
                                    src={`https://www.youtube.com/embed/${trailer.key}`}
                                    title="Movie Trailer"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}

                        {/* Additional Info */}
                        <div className="additional-info">
                            <div className="info-item">
                                <span><strong>Budget:</strong>
                                ${movie.budget?.toLocaleString() || 'N/A'}</span>
                            </div>
                            <div className="info-item">
                                <strong>Revenue:</strong>
                                <span>${movie.revenue?.toLocaleString() || 'N/A'}</span>
                            </div>
                            <div className="info-item">
                                <strong>Status:</strong>
                                <span>{movie.status || 'N/A'}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cast */}
                {movie.credits?.cast && movie.credits.cast.length > 0 && (
                    <div className="cast-section">
                        <h3>Top Cast</h3>
                        <div className="cast-grid">
                            {movie.credits.cast.slice(0, 10).map(person => (
                                <div key={person.id} className="cast-card">
                                    <img 
                                        src={
                                            person.profile_path
                                                ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                                                : 'https://via.placeholder.com/200x300?text=No+Photo'
                                        }
                                        alt={person.name}
                                    />
                                    <div className="cast-info">
                                        <p className="cast-name">{person.name}</p>
                                        <p className="cast-character">{person.character}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Similar Movies */}
                {movie.similar?.results && movie.similar.results.length > 0 && (
                    <div className="similar-section">
                        <h3>Similar Movies</h3>
                        <div className="similar-grid">
                            {movie.similar.results.slice(0, 6).map(similar => (
                                <Link 
                                    to={`/movie/${similar.id}`} 
                                    key={similar.id}
                                    className="similar-card"
                                >
                                    <img 
                                        src={
                                            similar.poster_path
                                                ? `https://image.tmdb.org/t/p/w300${similar.poster_path}`
                                                : 'https://via.placeholder.com/300x450?text=No+Poster'
                                        }
                                        alt={similar.title}
                                    />
                                    <p>{similar.title}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}







