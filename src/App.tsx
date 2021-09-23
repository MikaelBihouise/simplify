import React, { useEffect, useState } from 'react';
import './App.css';
import { getSpotifyAuthURL, getSpotifyParams } from './authentification';

function App() {
  const [URL, setURL] = useState<string>('');
  const [accessToken, setAccessToken] = useState<string>('');

  useEffect(() => {
    async function loadURL() {
      await getSpotifyAuthURL().then(setURL);
    }
    loadURL();
  }, []);

  useEffect(() => {
    if (window.location.hash.includes('access_token')) {
      setAccessToken(window.location.hash);
    } else {
      window.location.href = `${URL}`;
    }
  }, [URL]);

  getSpotifyParams(accessToken);

  return (
    <div className="App">
      <h1>Simplify</h1>
    </div>
  );
}

export default App;
