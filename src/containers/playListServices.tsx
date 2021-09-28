import { useSelector } from 'react-redux';
import { SpotifyToken } from '../authentification';
import { RootState } from '../reducers/RootReducer';

export const getUserPlaylists = async (): Promise<string> => {
  const token = useSelector<RootState, SpotifyToken>((state) => state.token);

  const headers = { Authorization: `Bearer ${token.access_token}` };
  const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    headers,
  });
  console.log(token, response, 'OH');
  const data = await response.json();
  return data;
};

export const createPlaylist = async (
  userId: string,
  playlistName: string,
  desc: string,
  publique: boolean
) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: playlistName,
      description: desc,
      public: publique,
    }),
  };
  const response = await fetch(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    requestOptions
  );
  const data = await response.json();
  return data;
};
