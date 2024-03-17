import SearchButtonSvg from 'components/SearchButtonSvg/SearchButtonSvg';
import { Link } from 'react-router-dom';

export default function Search() {
  return (
    <div className="auxiliary">
      <form className="search">
        <input type="text" />
        <button type="button">
          <SearchButtonSvg />
        </button>
      </form>
      <Link to="#" className="sprite auxiliary-link"></Link>
      <Link to="#" className="sprite auxiliary-link"></Link>
    </div>
  );
}
