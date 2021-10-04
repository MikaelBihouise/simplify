import React, { useEffect, useState } from 'react';
import SearchResult from '../childComponents/SearchResults';

export interface Result {
  className: string;
  img: string;
  trackName: string;
  albumName: string;
  artistName: string;
  id: string;
}

const SearchTrack = () => {
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any>([]);
  const [currentInfo, setCurrentInfo] = useState<Result[]>([
    {
      className: '',
      img: '',
      trackName: '',
      albumName: '',
      artistName: '',
      id: '',
    },
  ]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  let tracksInfo: Result[];
  let showResults: any[] = [];
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    setSearch(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const getSearch = async (): Promise<string> => {
      const token = localStorage.getItem('accessToken');
      const headers = { Authorization: `Bearer ${token}` };
      const response = await fetch(
        `https://api.spotify.com/v1/search/?q=${search}&type=track&limit=5`,
        {
          headers,
          method: 'GET',
        }
      );
      const data = await response.json();
      setSearchResults(data.tracks.items);
      return data;
    };
    getSearch();
  };

  useEffect(() => {
    tracksInfo = searchResults.map((items: any) => ({
      img: items.album.images[0].url,
      trackName: items.name,
      albumName: items.album.name,
      artistName: items.artists[0].name,
      id: items.id,
    }));
    setCurrentInfo(tracksInfo);
  }, [searchResults]);

  if (currentInfo !== []) {
    showResults = currentInfo.map((tracks: any, index: number) => (
      <SearchResult
        className={`search-card-${index}`}
        key={tracks.id}
        img={tracks.img}
        trackName={tracks.trackName}
        artistName={tracks.artistName}
        albumName={tracks.albumName}
        id={tracks.id}
      />
    ));
  }

  const handleClick = () => {
    setSearch('');
    setCurrentInfo([]);
    setIsDisabled(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a track"
          value={search}
          onChange={handleSearch}
          onClick={handleClick}
        />
        <button type="submit" disabled={isDisabled}>
          Search
        </button>
      </form>
      {showResults}
    </div>
  );
};

export default SearchTrack;
