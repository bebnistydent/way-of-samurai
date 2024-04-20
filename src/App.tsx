import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Navbar } from './components/Navigation';
import { Profile } from './components/Profile';


function App() {
  return (
    <div className="App-Wrapper">

    <Header/>
    <Navbar />
    <Profile />


    </div>
  );
}

export default App;
