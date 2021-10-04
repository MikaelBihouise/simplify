import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers/RootReducer';
import { getUserPlaylistsStart } from '../containers/playlist/playlistActions';
import { getUserPlaylistsTracksStart } from '../containers/playlistTracks/playlistTracksActions';
import { EmptyObject } from '../redux/types';
import TrackCard from '../childComponents/TrackCard';

interface playlist {
  value: string;
  label: string;
  desc: string;
  tracks: EmptyObject;
}

export interface cardInfo {
  img: string;
  trackName: string;
  artistName: string;
  albumName: string;
  releaseDate: string;
}

function Content() {
  const dispatch = useDispatch();
  const playlists = useSelector(
    (state: RootState) => state.playlist.items.items
  );
  const playlistTracks = useSelector(
    (state: RootState) => state.playlistTracks.items.items
  );

  const [currentPlaylist, setCurrentPlaylist] = useState<playlist>({
    value: '',
    label: '',
    desc: '',
    tracks: {},
  });
  const [currentInfo, setCurrentInfo] = useState<cardInfo[]>([
    {
      img: '',
      trackName: '',
      artistName: '',
      albumName: '',
      releaseDate: '',
    },
  ]);
  let displayPublicPlaylist: any;
  let filterSelectValues: any;
  let tracksInfo: cardInfo[];
  let showTracks: any = [];
  const options: { value: string; label: string }[] = [];

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      displayPublicPlaylist = playlists
        .filter((item: any) => item.public === true)
        .map((item: any) => ({
          value: item.name,
          label: item.name,
          desc: item.description,
          tracks: item.tracks,
        }));
      filterSelectValues = displayPublicPlaylist.map((item: any) => ({
        value: item.value,
        label: item.label,
      }));
      options.push(...filterSelectValues);
    }
  }, [playlists, playlistTracks]);

  const handleChange = (e: any) => {
    dispatch(getUserPlaylistsStart());
    const findCurrentPlaylist = displayPublicPlaylist.filter(
      (item: playlist) => e.value.toString() === item.value.toString()
    );
    setCurrentPlaylist(findCurrentPlaylist[0]);
    localStorage.setItem(
      'playlistTracksURL',
      findCurrentPlaylist[0].tracks.href
    );
    dispatch(getUserPlaylistsTracksStart());
  };

  useEffect(() => {
    if (playlistTracks) {
      tracksInfo = playlistTracks.map((items: any) => ({
        img: items.track.album.images[0].url,
        trackName: items.track.name,
        artistName: items.track.artists[0].name,
        albumName: items.track.album.name,
        releaseDate: items.track.album.release_date,
      }));
      setCurrentInfo(tracksInfo);
    }
  }, [playlistTracks]);

  if (currentInfo[0].artistName !== '') {
    showTracks = currentInfo.map((tracks: cardInfo) => (
      <TrackCard
        img={tracks.img}
        trackName={tracks.trackName}
        artistName={tracks.artistName}
        albumName={tracks.albumName}
        releaseDate={tracks.releaseDate}
      />
    ));
  }

  return (
    <div className="content">
      <div className="content-header">
        <Select
          options={options}
          placeholder="Select a playlist"
          className="select"
          onChange={handleChange}
        />
        <p>{currentPlaylist.desc}</p>
      </div>
      <div className="content-body">{showTracks}</div>
    </div>
  );
}

export default Content;
