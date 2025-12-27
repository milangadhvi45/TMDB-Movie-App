import { useEffect, useState } from "react";
import { useMovie } from "../Component/useMovie"
import { Link } from "react-router-dom";
import '../App.css'
export default function TrendingPage(){
  // const {MovieId} = useParams();
    const {FetchTrending} = useMovie();
    const [Trending , setTrending] = useState([]);
  //  const [Trendingcard , setTrendingcard] = useState([])

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

   

    return(
      <>
        {Trending.length === 0 ? (
            <p>data Not Found</p>
        ) : (
            <div>
                {Trending.map(Movie => (
                  <Link to={`/movie/${Movie.id}`}
                  key={Movie.id}
                  >

                    <div>
                    <img src={
                          Movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w500${Movie.poster_path}`
                                            : 'https://via.placeholder.com/500x750?text=No+Poster'
                    } alt=""/>

                    <h3>{Movie.title}</h3>
                    <p>{Movie.id}</p>
                      <h5>{Movie.vote_average}.toFixed(1)</h5>
                      <h5>{Movie.release_date?.split('-')[0] || 'N/A' }</h5>
                      
                    </div>
                  </Link>

                ))}
            </div>
        )}   



      </>  
    )
}