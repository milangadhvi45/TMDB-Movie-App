import { useEffect, useState } from "react"
import { useMovie } from "../Component/useMovie";

export default function PopularPage(){
    const {FetchPopular , loding , error} = useMovie();
    const [Popularmovie , setPopularmovie] = useState([]);

    useEffect(() => {
        const loadpopuler = async () => {
         const data = await FetchPopular();
           if (data && data.results) {
            setPopularmovie(data.results);
           }
        }
        loadpopuler(); 
    },[]);


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
    
    return(
        <>
               { Popularmovie.length === 0 ? (
                <p>Popular Data not found</p> ) :
                (
            <div>

          {Popularmovie.map(movie => (
                            <div key={movie.id} className="movie-card">
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
                            </div>
                        ))}
            </div>

                )
            }
        </>
    )
}