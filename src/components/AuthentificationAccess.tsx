import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getSpotifyAuthURL,
  getSpotifyParams,
  SpotifyToken,
} from '../authentification';

function AuthentificationAccess() {
  const dispatch = useDispatch();
  const [URL, setURL] = useState<string>('');
  const [accessToken, setAccessToken] = useState<string>('');
  const [tokenParams, setTokenParams] = useState<SpotifyToken>({
    access_token: '',
    token_type: '',
    expire_in: 0,
    state: '',
  });

  const addToken = (newToken: SpotifyToken) => {
    dispatch({ type: 'ADD_TOKEN', payload: newToken });
  };

  useEffect(() => {
    async function loadURL() {
      await getSpotifyAuthURL().then(setURL);
    }
    loadURL();
  }, []);

  useEffect(() => {
    if (window.location.hash.includes('access_token')) {
      setAccessToken(window.location.hash);
      setTokenParams(getSpotifyParams(accessToken));
    } else {
      window.location.href = `${URL}`;
    }
  }, [URL]);

  useEffect(() => {
    addToken(tokenParams);
    localStorage.setItem('accessToken', tokenParams.access_token);
  }, [tokenParams]);

  return tokenParams;
}

export default AuthentificationAccess;
