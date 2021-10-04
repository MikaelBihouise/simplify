const spotifyAuthURL = 'https://accounts.spotify.com/authorize';
const redirectAfterLog = 'http://localhost:3000/';
const scopes = [
  'playlist-read-private',
  'playlist-modify-private',
  'playlist-modify-public',
  'user-read-recently-played',
];
const scopesURL = scopes.join(' ');

export type SpotifyToken = {
  access_token: string;
  token_type: string;
  expire_in: number;
  state: string;
};

export const getSpotifyAuthURL = async (): Promise<string> => {
  const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env;
  const params = `${spotifyAuthURL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${redirectAfterLog}&scope=${scopesURL}&response_type=token&show_dialog=true&state=${REACT_APP_CLIENT_ID}:${REACT_APP_CLIENT_SECRET}`;
  return `${params.toString()}`;
};

export const getSpotifyParams = (params: string) => {
  const stringAfterHashtag = params.substring(1);
  const paramsInURL = stringAfterHashtag.split('&');
  const paramsSplit = paramsInURL.map((a) => {
    const values = a.substring(a.indexOf('=') + 1);
    return values;
  });
  const token: SpotifyToken = {
    access_token: paramsSplit[0],
    token_type: paramsSplit[1],
    expire_in: parseInt(paramsSplit[2], 10),
    state: paramsSplit[3],
  };
  return token;
};
