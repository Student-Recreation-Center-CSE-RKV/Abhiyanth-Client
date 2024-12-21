import React from 'react';
import Header from '../components/Header';
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';

export default function Main() {
  const styles = {
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', 
    },
    contentContainer: {
      flex: 1, 
      paddingBottom: '100px', 
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
