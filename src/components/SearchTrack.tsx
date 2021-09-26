import React, { useState } from 'react';

interface NewSearchTerm {
  addTerm(term: string): void;
}

const SearchTrack = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a track"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button type="button">Search</button>
    </div>
  );
};

export default SearchTrack;
