const getUser = async (): Promise<string> => {
  const token = localStorage.getItem('accessToken');
  const headers = { Authorization: `Bearer ${token}` };
  const response = await fetch('https://api.spotify.com/v1/me', {
    headers,
    method: 'GET',
  });
  const data = await response.json();
  return data;
};

export default getUser;
