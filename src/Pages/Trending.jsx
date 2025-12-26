import { useEffect, useState } from "react";
import { useMovie } from "../Component/useMovie"
import { Link, useParams } from "react-router-dom";

export default function TrendingPage(){
    const {FetchTrending} = useMovie();
    const [Trending , setTrending] = useState([]);
    const [Trendingcard , setTrendingcard] = useState([])

    useEffect(() => {
 const LoadTrending = async () => {
       let data = await FetchTrending();
       console.log(data);
       
       if (data && data.results) {
         setTrending(data.results);
       } 
    }
    LoadTrending()
    } , [])
   console.log(Trending);

   const {MovieId} = useParams();
   const MovieCard = Trending.find(u => u.id  === Number(MovieId))
  if (MovieCard) {
   setTrendingcard(MovieCard);    
  }

    return(
      <>
        {Trending.length === 0 ? (
            <p>data Not Found</p>
        ) : (
            <div>
                {Trending.map(Movie => (
                    <div key={Movie.id}>
                    <img src={
                          Movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w500${Movie.poster_path}`
                                            : 'https://via.placeholder.com/500x750?text=No+Poster'
                    } alt="" />

                    <h3>{Movie.title}</h3>
                      <h5>{Movie.vote_average}.toFixed(1)</h5>
                      <h5>{Movie.release_date?.split('-')[0] || 'N/A' }</h5>
                      <button>
                        <Link to={`/trending/${Movie.id}`}>View</Link>
                      </button>
                    </div>
                ))}
            </div>
        )}   


        {MovieCard && (
            <div>
                {Trendingcard.map(card => (
                   <div>
                    <h3>{card.id}</h3>
                    <h3>{card.title}</h3>
                   </div> 
                ))}
            </div>
        )} 
      </>  
    )
}