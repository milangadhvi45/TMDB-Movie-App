import { useState } from "react";
//import { UseMovieContext } from "../MovieContext/WatchlistContext";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3'

export function useMovie(){
   const [loding , setloding] = useState(false);
   const [error , seterror] = useState(null);
   
   const FetchMovie = async (page = 1) => {
    setloding(true);
    seterror(null);
                                 
   try {
   const response = await fetch(
    //`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`
   // https://api.themoviedb.org/3/trending/movie/{time_window}
  );

   if (!response.ok) {
    throw new Error('Data Not Found')
   }

   let tmdbDATA =await response.json();
   console.log('movie data is here',tmdbDATA);

   setloding(false)
   return tmdbDATA;

   } catch (err) {
    seterror(err.message)
    setloding(false);
    return null
   }
    
}

const FetchTrending = async (page = 1) => {
  setloding(true);
  seterror(null);
  try {
    let response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`);
                             //`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
      if (!response.ok) {
        throw new Error('Trending api Not Found');
      }

      const TrendingData =await response.json();
      console.log(TrendingData);
      setloding(false);

      return TrendingData;
  } catch (error) {
    setloding(false);
    seterror(error.message);
    return null;
  }
}

const FetchPopular = async (page = 1) => {
  setloding(true);
  seterror(null);
 try {
 const response = await fetch(
  `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
 )

 if (!response.ok) {
  throw new Error('Popular Data Not Found')
 }
 let Populardata = await response.json();
   console.log('Popular movie data is here',Populardata);

 setloding(false);

 return Populardata;
 } catch (err) {
  setloding(null);
  seterror(err.message);
  return null;
 }
}


// const FetchTrending = async()=> {
//   setloding(true);
//   seterror(null);

//   try {
//     const response = await fetch(
//       `${BASE_URL}/trendingmovie/`
//       //https://api.themoviedb.org/3/trending/movie/{time_window}
//     )
//   } catch (err) {
    
//   }
// }
 const searchMovie = async (query , page = 1) => {
   if (!query || query.trim() === '') {
    return null
   }

   setloding(true);
   seterror(null);

   try{
    const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    //https://api.themoviedb.org/3/search/movie
    );

    if (!response.ok) {
      throw new Error('serch Failed');
    }

    const tmdbdata = await response.json();
    console.log('search result', tmdbdata);

    setloding(false);
    return tmdbdata;
    
   } catch(err) {
   seterror(err.message);
   setloding(false);
   return null;
   }
 }

return {loding,error , FetchMovie ,FetchPopular ,FetchTrending,searchMovie}
  // const popularURL = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
//const SerachURL= `${Base_URL}/movie/`
}