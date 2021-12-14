import { render } from "@testing-library/react";
import React, {useState, useEffect} from "react";
import { Component } from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Routes,Route,Link}from 'react-router-dom';
import Navbar from './components/Navbar'
import About from "./components/About";
import Home from "./components/Home";

// function App(){
//   return(
//     <div>
//       <BasicExample />

//     </div>
//   )
// }

class App extends React.Component{
  render(){
    return(
      <div className="App">
      <Router>
        <Navbar />

      <Routes>
      
        <Route path="/" element={<Home />}></Route>
          
        <Route path="/about" element={<About />}></Route>
        
          </Routes>

          </Router> 

      </div>
    )
  }
}



export default App;





