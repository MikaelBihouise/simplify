import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers/RootReducer';
import { getUserPlaylistsStart } from '../containers/playlist/playlistActions';
import { getUserPlaylistsTracksStart } from '../containers/playlistTracks/playlistTracksActions';
import { EmptyObject } from '../redux/types';
import TrackCard from '../childComponents/TrackCard';

interface playlist {
  id: string;
  value: string;
  label: string;
  desc: string;
  tracks: EmptyObject;
}

export interface cardInfo {
  key: string;
  img: string;
  trackName: string;
  artistName: string;
  albumName: string;
  releaseDate: string;
}

interface OptionsInterface {
  value: string;
  label: string;
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
    id: '',
    value: '',
    label: '',
    desc: '',
    tracks: {},
  });
  const [currentInfo, setCurrentInfo] = useState<cardInfo[]>([
    {
      key: '',
      img: '',
      trackName: '',
      artistName: '',
      albumName: '',
      releaseDate: '',
    },
  ]);
  const [selectOptions, setSelectOptions] = useState<OptionsInterface[]>([
    {
      value: '',
      label: '',
    },
  ]);
  const [savedPlaylist, setSavedPlaylist] = useState<playlist[]>([
    {
      id: '',
      value: '',
      label: '',
      desc: '',
      tracks: {},
    },
  ]);
  const [isPlaylistsLoaded, setIsPlaylistsLoaded] = useState<boolean>(false);
  const [playlistSelected, setPlaylistSelected] = useState<boolean>(false);
  let displayPlaylist: any;
  let filterSelectValues: any;
  let tracksInfo: cardInfo[];
  let showTracks: any = [];

  useEffect(() => {
    if (playlists !== [] && playlists !== undefined) {
      setIsPlaylistsLoaded(true);
    }
  }, [playlists]);

  useEffect(() => {
    if (isPlaylistsLoaded) {
      displayPlaylist = playlists.map((item: any) => ({
        id: item.id,
        value: item.name,
        label: item.name,
        desc: item.description,
        tracks: item.tracks,
      }));
      filterSelectValues = displayPlaylist.map((item: any) => ({
        value: item.value,
        label: item.label,
      }));
      setSelectOptions(filterSelectValues);
      setSavedPlaylist(displayPlaylist);
    }
  }, [isPlaylistsLoaded]);

  const handleChange = (e: any) => {
    dispatch(getUserPlaylistsStart());
    const findCurrentPlaylist = savedPlaylist.filter(
      (item: playlist) => e.value.toString() === item.value.toString()
    );
    setCurrentPlaylist(findCurrentPlaylist[0]);
    localStorage.setItem('currentPlaylist', findCurrentPlaylist[0].id);
    localStorage.setItem(
      'playlistTracksURL',
      findCurrentPlaylist[0].tracks.href
    );
    dispatch(getUserPlaylistsTracksStart());
    setPlaylistSelected(true);
  };

  useEffect(() => {
    if (playlistTracks) {
      tracksInfo = playlistTracks.map((items: any) => ({
        key: items.track.id,
        img: items.track.album.images[0].url,
        trackName: items.track.name,
        artistName: items.track.artists[0].name,
        albumName: items.track.album.name,
        releaseDate: items.track.album.release_date,
      }));
      setCurrentInfo(tracksInfo);
    }
  }, [playlistTracks]);

  if (currentInfo !== [] && playlistSelected) {
    showTracks = currentInfo.map((tracks: cardInfo) => (
      <TrackCard
        key={tracks.key}
        img={tracks.img}
        trackName={tracks.trackName}
        artistName={tracks.artistName}
        albumName={tracks.albumName}
        releaseDate={tracks.releaseDate}
      />
    ));
  } else {
    showTracks = null;
  }

  return (
    <div className="content">
      <div className="content-header">
        <Select
          options={selectOptions}
          placeholder="Select a playlist"
          className="select"
          onChange={handleChange}
        />
        <p>{currentPlaylist.desc.toString()}</p>
      </div>
      <div className="content-body">{showTracks}</div>
    </div>
  );
}

export default Content;
