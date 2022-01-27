import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviePage from './components/MoviePage';
import Home1 from './components/Home1';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          exact
          path="/" 
          element= {<Home />}
        />
        <Route 
          exact
          path="/test" 
          element= {<Home1 />}
        />
        <Route path="/movies/:imbdID" element={<MoviePage />}/>
        
      </Routes>
    
    </BrowserRouter>

  );
};

export default App;
