import React from 'react';
import { cardInfo } from '../components/Content';

const TrackCard: React.FC<cardInfo> = ({
  img,
  trackName,
  artistName,
  albumName,
  releaseDate,
}) => (
  <div className="track-card">
    <img src={img} alt="a generic album cover" />
    <div>
      <p className="bold">{trackName}</p>
      <p>{artistName}</p>
    </div>
    <p>{albumName}</p>
    <p>{releaseDate}</p>
  </div>
);

export default TrackCard;
