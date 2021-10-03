import react from 'react';

const createPlaylist = async (
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

export default createPlaylist;
