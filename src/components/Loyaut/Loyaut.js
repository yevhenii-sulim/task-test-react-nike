import Footer from 'components/Footer/Footer';
import HeaderRegistration from 'components/HeaderRegistration/HeaderRegistration';
import Logo from 'components/LogoSVG/Logo';
import Nav from 'components/Nav/Nav';
import Search from 'components/Search/Search';
import { Link, Outlet } from 'react-router-dom';

export default function Loyaut() {
  return (
    <div className="wrapper">
      <header>
        <HeaderRegistration />
        <div className="nav-container">
          <div className="container">
            <Link to="#">
              <Logo />
            </Link>
            <Nav />
            <Search />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
