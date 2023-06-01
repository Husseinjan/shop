import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import All from './All';

import SelfDevelop from './components/SelfDevelop';
import AboutBook from './components/AboutBook';
import Rewievs from './components/Rewievs';


function App() {
 
 

  return (
    <BrowserRouter>
    <div className="App">
 <Routes>
 <Route path='/' element={<All/>}/>

 <Route path='/selfdev' element={<SelfDevelop/>}/>
 <Route path='/aboutbook/:booksId' element={<AboutBook/>}/>
 <Route path='/rewievs' element={<Rewievs/>}/>
 
 </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
