import { createContext, useContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export function UseMovieContext(){
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error('useMovieContext must be used within MovieProvider');  
    }
    return context
}

export function MovieProvider({children}){
   const [WatchList , setWatchList] = useState(() => {
    let SaveList = localStorage.getItem('Watchlist')
    return SaveList ? JSON.parse(SaveList) : []
   })

   useEffect(() => {
    localStorage.setItem('Watchlist',JSON.stringify(WatchList))
   },[WatchList]);
    
   const AddWatchlist = (movie) => {
    if(!WatchList.find(watch => watch.id === movie.name))
    setWatchList([...WatchList, movie]);
   }
 //79529b985a5b36c1523654726022a07d;
  
   const RemoveWatchlist = (movieid) => {
      setWatchList(WatchList.filter(movie => movie.id !== movieid));
   }

   const value = {
    WatchList,
    AddWatchlist,
    RemoveWatchlist
   }

   return(
    <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
   )
}