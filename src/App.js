import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { DiscoverPage } from './pages/DiscoverPage';
import { Join } from './pages/Join';
function App() {
  return (
    <Router basename='/Soundwave'>
      <Routes>
              <Route path='/join' element={<Join />} />
              <Route path='/discover' element={<DiscoverPage/>} />
              <Route path='/' element={<MainPage />} />
              
      </Routes>
    </Router>
      
  );
}

export default App;
