import React from 'react';

const AddNewPlaylist = () => {
  const handleClick = () => {
    console.log('hey');
  };

  return (
    <button type="button" onClick={handleClick} className="ml-auto">
      Add New Playlist
    </button>
  );
};

export default AddNewPlaylist;
