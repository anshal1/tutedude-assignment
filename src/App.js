import './App.css';
import Breadcrums from './Components/Breadcrums/Breadcrums';
import MainContent from './Components/MainContent/MainContent';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Breadcrums/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/refer/earn' element={<MainContent/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
