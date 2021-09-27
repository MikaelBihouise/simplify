import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSpotifyAuthURL,
  getSpotifyParams,
  SpotifyToken,
} from '../authentification';
import { getUserSuccess } from '../redux/actions';
import { RootState } from '../reducers/RootReducer';

function AuthentificationAccess() {
  const [URL, setURL] = useState<string>('');
  const [accessToken, setAccessToken] = useState<string>('');
  const [tokenParams, setTokenParams] = useState<SpotifyToken>({
    access_token: '',
    token_type: '',
    expire_in: 0,
    state: '',
  });
  const [userID, setUserID] = useState<string>('');
  const dispatch = useDispatch();
  const token = useSelector<RootState, SpotifyToken>((state) => state.token);

  const addToken = (newToken: SpotifyToken) => {
    dispatch({ type: 'ADD_TOKEN', payload: newToken });
  };
  const addUser = (newUser: getUserSuccess) => {
    dispatch({ type: 'GET_USER_SUCCESS', payload: newUser });
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
  }, [tokenParams]);

  useEffect(() => {
    const headers = { Authorization: `Bearer ${token.access_token}` };
    const getUser = async (): Promise<string> => {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers,
      });
      const data = await response.json();
      setUserID(data.id);
      return data;
    };
    getUser();
  }, [token]);

  useEffect(() => {
    addUser({ type: 'GET_USER_SUCCESS', id: userID });
  }, [userID]);

  return tokenParams;
}

export default AuthentificationAccess;
