/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import { motion } from "framer-motion";
import "./css/main.css";
import {Route,BrowserRouter, Routes} from "react-router-dom";
import "./Style.css";
import LoginForm from "./components/LoginForm"



function App (){
 
  return (
    <div className="app">
     

     
        
        <BrowserRouter>
        <renderForm/>
        <Routes>
        <Route exact path="/" element={<LoginForm/>}></Route>
       
        </Routes>
        </BrowserRouter>
        
     </div>
  );
 


  
}

export default App;