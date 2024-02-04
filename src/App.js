import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import RelaxCountry from './components/relaxCountry/RelaxCountry';
import Footer from './components/footer/Footer';
import SingelPage from './components/relaxCountry/SingelPage';
import Tikkets from './components/tikkets/Tikkets';
import Contact from './components/contact/Contact'

function App() {
 



  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/relaxCountry' element={<RelaxCountry/>}></Route>
        <Route path='/relaxCountry/:id' element={<SingelPage/>}></Route>
        <Route path='/tikkets' element={<Tikkets/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
