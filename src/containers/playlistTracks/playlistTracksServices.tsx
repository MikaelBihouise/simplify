const getUserPlaylistTracks = async (): Promise<string> => {
  const token = localStorage.getItem('accessToken');
  const URL = localStorage.getItem('playlistTracksURL');
  const headers = { Authorization: `Bearer ${token}` };
  const response = await fetch(`${URL}`, {
    headers,
    method: 'GET',
  });
  const data = await response.json();
  return data;
};

export default getUserPlaylistTracks;
