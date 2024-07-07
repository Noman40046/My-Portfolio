
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Outlet } from 'react-router-dom';
import Loader from '../Common/Loader';
import React, { useState, useEffect } from "react";


const MainLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500); // 2 seconds
  
      // Cleanup the timer on unmount
      return () => clearTimeout(timer);
    }, []);
    return (
        <>
        <div className="App">
          {loading ? (
            <Loader />
          ) : (
            <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
          )}
        </div>
      </>
        
    );
};

export default MainLayout;