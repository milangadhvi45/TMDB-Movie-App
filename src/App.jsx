import { MovieProvider } from './MovieContext/WatchlistContext';
import { Routes , Route} from 'react-router-dom';
import { useState  } from 'react';
import PopularPage from './Pages/PopularPage';
import Home from './Pages/Home';
import TrendingPage from './Pages/Trending';
import MovieDetails from './Pages/MovieDetails';
import Navbar from './Pages/Navbar'
import Toprated from './Pages/TopRated';
import Watchlist from './Pages/Watchlist';
import Footer from './Pages/Footer';
//import './App.css'
//import SearchPage from './Pages/Searchpage';
function MovieApp() {
   
    
 const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    

    return (
   
      
        <div className="app">
                       <Navbar onSearch={handleSearch}/>      
           <Routes>
                <Route path='/' element={<Home searchQuery={searchQuery}/>}/>
                <Route path='/trending' element={<TrendingPage/>} />
                <Route path='/movie/:id' element={<MovieDetails/>}/>
                <Route path='/popular' element={<PopularPage/>}/>
                <Route path='/top-rated' element={<Toprated/>}/>
                <Route path='/watchlist' element={<Watchlist/>}/>
            </Routes>
                   <Footer />
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

