// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';


const App = () => {
  return (
    <div className='App'>
       <Routes>
              <Route path="/" element={<Home></Home>} ></Route>
              <Route path="friends" element={<Friends></Friends>} ></Route>
              <Route path="about" element={<About></About>} ></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>

    </div>
  );
};

export default App;