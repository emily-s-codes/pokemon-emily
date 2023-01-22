import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Menu from './pages/Menu';
import TypeList from './pages/TypeList';
import SearchBar from './components/searchbar/SearchBar';
import { useEffect } from 'react';



function App() {
  const [searchTerm, setSearchTerm] = useState();
  const [darkmode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkmode === true) {
      document.body.className = "darkmode";
    } else {
      document.body.className = "lightmode";
    }
  }, [darkmode]);

  function searchFunction(search) {
    setSearchTerm(search);
  }


  return (
    <Router>
      <Routes>
        <Route path='/' element={<> <SearchBar darkmode={darkmode} setDarkMode={setDarkMode} search={searchFunction} /> <Home searchTerm={searchTerm} /></>}></Route>
        <Route path='/detail/:name' element={<><SearchBar darkmode={darkmode} setDarkMode={setDarkMode} search={searchFunction} /> <Detail /> </>}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/typelist/:type' element={<><SearchBar darkmode={darkmode} setDarkMode={setDarkMode} search={searchFunction} /><TypeList /></>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
