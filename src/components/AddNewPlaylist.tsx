import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SpotifyToken } from '../authentification';

const AddNewPlaylist = () => {
  const token = useSelector<SpotifyToken, SpotifyToken>((state) => state);
  const handleClick = () => {
    console.log(token);
  };

  return (
    <button type="button" onClick={handleClick} className="ml-auto">
      Add New Playlist
    </button>
  );
};

export default AddNewPlaylist;
