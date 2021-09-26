import SearchTrack from './SearchTrack';
import AddNewPlaylist from './AddNewPlaylist';

function Header() {
  return (
    <div className="header">
      <h1>Simplify</h1>
      <SearchTrack />
      <AddNewPlaylist />
    </div>
  );
}

export default Header;
