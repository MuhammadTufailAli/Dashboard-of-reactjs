import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/MyResult';
import Submission from './pages/Submissions';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' extact element={<Home/>}/>
      <Route path='/results' element={<Result/>}/>
      <Route path='/submission' element={<Submission/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
