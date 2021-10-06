import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers/RootReducer';
import { getUserPlaylistsStart } from '../containers/playlist/playlistActions';

export interface createPlaylist {
  visible: React.Dispatch<React.SetStateAction<boolean>>;
}

function NewPlaylist({ visible }: createPlaylist) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.id.id);
  const [playlistName, setPlaylistName] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistName(e.target.value);
  };

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDesc(e.target.value);
  };

  const handleClickCreate = () => {
    const createAPlaylist = async () => {
      const token = localStorage.getItem('accessToken');
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: playlistName,
          description: desc,
          public: true,
        }),
      };
      const response = await fetch(
        `https://api.spotify.com/v1/users/${user}/playlists`,
        requestOptions
      );
      const data = await response.json();
      return data;
    };
    createAPlaylist();
    visible(false);
    dispatch(getUserPlaylistsStart());
  };

  return (
    <div className="add-playlist-background">
      <div className="add-playlist">
        <p>Add a new playlist</p>
        <form>
          <label htmlFor="Playlist name">
            Playlist name :
            <input
              type="text"
              placeholder="Playlist Name"
              value={playlistName}
              onChange={handleChangeName}
              required
            />
          </label>
          <label htmlFor="Playlist description (optional)">
            Playlist description (optional) :
            <textarea
              placeholder="Playlist description"
              value={desc}
              onChange={handleChangeDescription}
            />
          </label>
          <button
            type="button"
            aria-label="Cancel"
            value="Cancel"
            onClick={() => visible(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            aria-label="Create"
            value="Create"
            onClick={handleClickCreate}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPlaylist;
