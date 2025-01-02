import React from 'react';
import Header from '../components/general/Header';
import { Outlet, useLocation } from "react-router-dom";
import Footer from '../components/general/Footer';

export default function Main({flag}) {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== "/";

  const styles = {
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    contentContainer: {
      flex: 1,
    },
    footerContainer: {
      marginTop: 'auto',
    }
  };

  return (
    <div style={styles.mainContainer}>
      <Header />
      <div style={styles.contentContainer}>
        <Outlet />
      </div>
      
        <div style={styles.footerContainer}>
          <Footer />
        </div>
    
    </div>
  );
}
