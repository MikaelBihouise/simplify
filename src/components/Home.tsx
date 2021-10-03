import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/style.css';
import Header from './Header';
import { RootState } from '../reducers/RootReducer';
import AuthentificationAccess from './AuthentificationAccess';
import { getUserStart } from '../containers/user/userActions';
import { getUserPlaylistsStart } from '../containers/playlist/playlistActions';

function Home() {
  const dispatch = useDispatch();
  const [tokenReady, setTokenReady] = useState<boolean>(false);
  AuthentificationAccess();
  const playlists = useSelector((state: RootState) => state.playlist.items);
  const user = useSelector((state: RootState) => state.user);
  const token = useSelector((state: RootState) => state.token);

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setTokenReady(true);
    }
  }, [localStorage.getItem('accessToken')]);

  useEffect(() => {
    if (tokenReady) {
      dispatch(getUserStart());
      dispatch(getUserPlaylistsStart());
    }
  }, [tokenReady]);

  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default Home;
