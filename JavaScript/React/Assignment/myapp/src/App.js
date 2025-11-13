import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";
import Login from "./Pages/LoginPage";
import Home from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import UserPosts from "./Pages/UserPosts";

function App() {
  return (
   
      <BrowserRouter>
       <div className="App"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/UserPosts" element={<UserPosts />} />
        </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
