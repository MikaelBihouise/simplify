import React from 'react';
import { useDispatch } from 'react-redux';
import { getUserPlaylistsStart } from './playlistActions';

const playlist = () => {
  const dispatch = useDispatch();
  return () => {
    dispatch(getUserPlaylistsStart());
  };
};

export default playlist;
