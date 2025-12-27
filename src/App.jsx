import { MovieProvider } from './MovieContext/WatchlistContext';
import { Link , Routes , Route} from 'react-router-dom';
import { useState  } from 'react';
import PopularPage from './Pages/PopularPage';
import Home from './Pages/Home';
import TrendingPage from './Pages/Trending';
import MovieDetails from './Pages/MovieDetails';
import './App.css'
import Navbar from './Pages/NAvbar';
import Toprated from './Pages/TopRated';
import Watchlist from './Pages/Watchlist';
function MovieApp() {
   
      const [searchQuery, setSearchQuery] = useState('');  // Track what we're searching
    

     const handleSearch = async (query) => {
        setSearchQuery(query);  // Save what we searched    
    };

    return (
   
      
        <div className="app">
                       <Navbar onSearch={handleSearch}/>      
           <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/trending' element={<TrendingPage/>} />
                <Route path='/movie/:id' element={<MovieDetails/>}/>
                <Route path='/popular' element={<PopularPage/>}/>
                <Route path='/top-rated' element={<Toprated/>}/>
                <Route path='/watchlist' element={<Watchlist/>}/>
            </Routes>
     
        </div>          
    );
}
export default function App() {
  return (
    <MovieProvider>
      <MovieApp/>
    </MovieProvider>
  )
}

