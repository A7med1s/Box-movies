// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

import {Route,BrowserRouter,Routes} from "react-router-dom"
import CurrentMovie from './components/CurrentMovie';
import Footer from './components/Footer';
import ALlMovies from './components/ALlMovies';
import News from './components/News';
import About from './components/About';

function App() {


  return(
   <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/movies' element={<CurrentMovie/>}/>
        <Route path='all-movies/movies' element={<CurrentMovie/>}/>
        <Route path='/all-movies' element={<ALlMovies/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   </>
  )

}




export default App;

