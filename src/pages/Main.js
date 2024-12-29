import React from 'react';
import Header from '../components/general/Header';
import { Outlet } from "react-router-dom";
import Footer from '../components/general/Footer';
import { useState } from 'react'


export default function Main({flag}) {
 
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
      {flag && (<Header />)}

      <div style={styles.contentContainer}>
        <Outlet/>
      </div>
      {flag && (<div style={styles.footerContainer}>
        <Footer />
      </div>)}
    </div>
  );
}
