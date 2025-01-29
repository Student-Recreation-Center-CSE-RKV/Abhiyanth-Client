import React from 'react';
import Header from '../components/general/Header';
import { Outlet } from "react-router-dom";
import Footer from '../components/general/Footer';
import ErrorBoundary from './ErrorBoundary';

export default function Main() {
  
  
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
    <ErrorBoundary>
      <div style={styles.mainContainer}>
      <Header />
      <div style={styles.contentContainer}>
        <Outlet />
      </div>
      
        <div style={styles.footerContainer}>
          <Footer />
        </div>
    
    </div>
    </ErrorBoundary>
  );
}
