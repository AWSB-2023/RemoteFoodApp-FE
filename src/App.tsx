import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import PrivateRouter from './PrivateRouter';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage/HomePage';

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
          </Route>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
