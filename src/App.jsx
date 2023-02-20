import './style/App.scss'

import React, {useEffect, useState} from "react";

import {Routes, Route} from "react-router-dom";
import Loader from "./components/Loader.jsx";
import HomePage from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

  return (
      <div className="main">
          {loading ? (<Loader />) : (<div></div>)}
          <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='*' element={<NotFound/>} />
          </Routes>
      </div>
  )
}

export default App
