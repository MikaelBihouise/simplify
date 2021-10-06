import React, { useState } from 'react';
import NewPlaylist from '../childComponents/NewPlaylist';

const AddNewPlaylist = () => {
  const [popinVisible, setPopinVisible] = useState<boolean>(false);

  const showPopup = popinVisible ? (
    <NewPlaylist visible={setPopinVisible} />
  ) : null;

  const handleClick = () => {
    setPopinVisible(!popinVisible);
  };

  return (
    <>
      <button type="button" onClick={handleClick} className="ml-auto">
        Add New Playlist
      </button>
      {showPopup}
    </>
  );
};

export default AddNewPlaylist;
