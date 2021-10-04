import React from 'react';
import { Result } from '../components/SearchTrack';

const SearchResult: React.FC<Result> = ({
  img,
  trackName,
  albumName,
  artistName,
  className,
  id,
}) => (
  <div className={`search-card ${className}`}>
    <img src={img} alt={`${albumName} album cover`} />
    <div>
      <p className="bold">{trackName}</p>
      <p>{artistName}</p>
    </div>
  </div>
);

export default SearchResult;
