import { MovieProvider } from './MovieContext/WatchlistContext';
import { Link , Routes , Route} from 'react-router-dom';
import PopularPage from './Pages/PopularPage';
import Home from './Pages/Home';
import TrendingPage from './Pages/Trending';

function MovieApp() {


    return (
        <div className="app">
            <header className="header">
                <h1>🎬 Movie App</h1>

                <nav>
                  <Link to='/'>Home</Link>
                  <Link to='/trending'>Trending</Link>
                  <Link to='/populer'>Popular</Link>
                </nav>
            </header>

      
           <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/trending' element={<TrendingPage/>} />
                <Route path='/trending/:MovieId' element={<TrendingPage/>}/>
                <Route path='/populer' element={<PopularPage/>}/>
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

