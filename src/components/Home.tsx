import React from 'react';
import '../styles/style.css';
import Header from './Header';
import AuthentificationAccess from './AuthentificationAccess';

function Home() {
  AuthentificationAccess();

  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default Home;
