import { useDispatch } from 'react-redux';
import { getUserPlaylistsTracksStart } from './playlistTracksActions';

const playlistTracks = () => {
  const dispatch = useDispatch();
  return () => {
    dispatch(getUserPlaylistsTracksStart());
  };
};

export default playlistTracks;
