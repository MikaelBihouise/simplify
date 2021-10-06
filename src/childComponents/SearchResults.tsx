import React from 'react';
import { Result } from '../components/SearchTrack';

function SearchResult({
  img,
  trackName,
  albumName,
  artistName,
  className,
  id,
}: Result) {
  const handleClick = () => {
    const addTrack = async () => {
      const token = localStorage.getItem('accessToken');
      const playlistID = localStorage.getItem('currentPlaylist');
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistID}/tracks?uris=spotify:track:${id}`,
        requestOptions
      );
      const data = await response.json();
      return data;
    };
    addTrack();
  };

  return (
    <div className={`search-card ${className}`}>
      <img src={img} alt={`${albumName} album cover`} />
      <div>
        <p className="bold">{trackName}</p>
        <p>{artistName}</p>
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="search-card-button"
        aria-label="Add this track to your current playlist"
      >
        +
      </button>
    </div>
  );
}

export default SearchResult;
