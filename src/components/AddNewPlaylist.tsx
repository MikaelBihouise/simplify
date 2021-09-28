import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPlaylistsStart } from '../containers/playlistActions';
import { RootState } from '../reducers/RootReducer';

const AddNewPlaylist = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.playlist);
  const handleClick = () => {
    dispatch(getUserPlaylistsStart());
    console.log(items);
  };

  return (
    <button type="button" onClick={handleClick} className="ml-auto">
      Add New Playlist
    </button>
  );
};

export default AddNewPlaylist;
