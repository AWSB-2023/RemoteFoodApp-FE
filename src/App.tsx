import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import PrivateRouter from './PrivateRouter';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage/HomePage';
import TopPage from './pages/Top/TopPage';
import DishPage from './pages/DishPage/DishPage';
import SignUp from './pages/Login/SignUp';
import SeeAll from './pages/SeeAll/SeeAll';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            element={
              <>
                <Navbar />
                <PrivateRouter />
              </>
            }
          >
            <Route path='/home' element={<HomePage />} />
            <Route path='/top' element={<TopPage />} />
            <Route path='/all' element={<SeeAll />} />
            <Route path='/all/:countryName' element={<SeeAll />} />
            <Route path='/dish/:dishId' element={<DishPage />} />
          </Route>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
